from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

teamIDs = {}

# Function to fetch player data
def fetch_player_data(team1_id, team2_id):
    # Read the CSV file into a DataFrame
    data = pd.read_csv('Final Players data.csv')
    # Filter players for the specified team IDs
    players_team1 = data[data['Team ID'] == team1_id]
    players_team2 = data[data['Team ID'] == team2_id]
    return players_team1, players_team2

# Function to select top players
def select_top_players(team1_id, team2_id):
    # Implement logic to select top players based on performance metrics
    # This function can be similar to the one we discussed earlier
    players_team1, players_team2 = fetch_player_data(team1_id, team2_id)

    # Concatenate the two DataFrames along columns (axis=1)
    combined_df = pd.concat([players_team1, players_team2], axis=0)

    # Group the combined DataFrame by player role
    grouped_by_role = combined_df.groupby('Role')

    # Access each group and store them in a dictionary
    players_by_role = {}
    for role, group in grouped_by_role:
        players_by_role[role] = group

    # Now you have a dictionary where keys are player roles and values are DataFrames containing players belonging to each role
    # You can access players by their roles like this:
    batsmen = players_by_role.get('Batsman')
    bowlers = players_by_role.get('Bowler')
    all_rounders = players_by_role.get('AR')
    wicket_keepers = players_by_role.get('WK')

    # Sort batsmen by 'next_SR' column
    batsmen_sorted = batsmen.sort_values(by='next_SR', ascending=False)

    # Sort bowlers first by 'next_wickets', then by 'next_runs_given' column
    bowlers_sorted = bowlers.sort_values(by=['next_wkts', 'next_runs_given'], ascending=[False, True])

    # Sort wicket keepers by 'next_SR' column
    wicket_keepers_sorted = wicket_keepers.sort_values(by='next_SR', ascending=False)

    # Sort all-rounders first by 'next_SR', then by 'next_wickets' column
    all_rounders_sorted = all_rounders.sort_values(by=['next_SR', 'next_wkts'], ascending=[False, False])

    # Select top 3 batsmen
    selected_batsmen = batsmen_sorted.head(3)

    # Select top 3 bowlers
    selected_bowlers = bowlers_sorted.head(3)

    # Select top 3 all-rounders
    selected_all_rounders = all_rounders_sorted.head(3)

    # Select top 2 wicket keepers
    selected_wicket_keepers = wicket_keepers_sorted.head(2)

    # Concatenate all selected players into one dataframe
    selected_players = pd.concat([selected_batsmen, selected_bowlers, selected_all_rounders, selected_wicket_keepers])

    # print(selected_players)

    return selected_players

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        team1_id = request.form['team1']
        team2_id = request.form['team2']
        teamIDs["team1_id"] = team1_id
        teamIDs["team2_id"] = team2_id
        # Select top players
        # selected_players = select_top_players(team1_id, team2_id)
        # print(selected_players)
        return render_template('result2.html')
    return render_template('index.html')

@app.route('/get_players_data', methods=['GET'])
def get_players_data():
    try:
        # Retrieve team IDs from the request
        team1_id = teamIDs["team1_id"]
        team2_id = teamIDs["team2_id"]
        
        # Call your function to select top players
        selected_players = select_top_players(team1_id, team2_id)
        
        # Convert the DataFrame to JSON and return it
        return jsonify(selected_players.to_dict(orient='records'))
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
    

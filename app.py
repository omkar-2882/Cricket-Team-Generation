from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

teamIDs = {}
lineUp = {
    "MI": 
        ['RG Sharma', 'Ishan Kishan', 'NT Tilak Varma', 'HH Pandya', 'TH David', 'JJ Bumrah','Mohammad Nabi', 'R Shepherd', 'G Coetzee','A Madhwal', 'S Gopal'],
    "RR": 
        ['YBK Jaiswal', 'JC Buttler', 'SV Samson', 'R Parag', 'R Ashwin', 'DC Jurel', 'SO Hetmyer', 'TA Boult', 'Avesh Khan', 'YS Chahal', 'Sandeep Sharma', 'N Burger'],
    "RCB":
        ['V Kohli', 'F du Plessis', 'GJ Maxwell', 'RM Patidar','WG Jacks', 'Mahipal Lomaror', 'KD Karthik', 'RJW Topley', 'Mohammed Siraj', 'V Vyshak'],
    "LSG": 
        ['Q de Kock','KL Rahul', 'D Padikkal', 'MP Stoinis','N Pooran','A Badoni', 'KH Pandya', 'Ravi Bishnoi', 'MP Yadav', 'Yash Thakur', 'Naveen-ul-Haq'],
    "DC": 
        ['PP Shaw', 'DA Warner', 'RR Pant', 'MR Marsh', 'T Stubbs', 'AR Patel', 'A Nortje', 'Sumit Kumar', 'I Sharma', 'KK Ahmed', 'Rasikh Salam'],
    "KKR":
        ['PD Salt', 'SP Narine', 'VR Iyer', 'SS Iyer', 'Ramandeep Singh' 'RK Singh', 'AD Russell', 'MA Starc', 'CV Varun', 'VG Arora', 'A Raghuvanshi'],
    "GT":
        ['WP Saha', 'Shubman Gill', 'KS Williamson', 'V Shankar', 'Azmatullah Omarzai', 'R Tewatia', 'Rashid Khan', 'UT Yadav', 'Noor Ahmad', 'DG Nalkande', 'B Sai Sudharsan'],
    "PBKS":
        ['S Dhawan', 'JM Bairstow', 'JM Sharma', 'SM Curran', 'Sikandar Raza', 'Shashank Singh', 'AR Sharma', 'Harpreet Brar', 'HV Patel', 'K Rabada', 'Arshdeep Singh'],
    "SRH": 
        ["TM Head", "Abhishek Sharma", "Abdul Samad", "PJ Cummins", "B Kumar", "T Natarajan", "JD Unadkat", "AK Markram", "Shahbaz Ahmed", "K Nitish Kumar Reddy","H Klaasen"],
    "CSK":
         ['RD Gaikwad', 'DJ Mitchell', 'Sameer Rizvi', 'AM Rahane', 'M Theekshana', 'TU Deshpande', 'RA Jadeja', 'R Ravindra','SN Thakur', 'Mustafizur Rahman', 'MS Dhoni']
}

# Function to fetch player data
def fetch_player_data(team1_id, team2_id):
    # Read the CSV file into a DataFrame
    data = pd.read_csv('Final Players data2.csv')
    # url = "https://drive.google.com/file/d/1KvUGQKg-2SrJOcErqgMKXyWIgTdhyLcR/view?usp=sharing"
    # url = "https://docs.google.com/spreadsheets/d/15hrVF9eqW0EvRQp83PmuIuv1PhfBtvkmGpGlWWDb6u8/edit?usp=sharing"
    # file_id = url.split('/')[-2]
    # url = f'https://drive.google.com/uc?export=download&id={file_id}'
    # url = f'https://drive.google.com/uc?export=download&id=15hrVF9eqW0EvRQp83PmuIuv1PhfBtvkmGpGlWWDb6u8'
    # data = pd.read_csv(url)
    # Filter players for the specified team IDs
    players_team1 = data[(data['Team ID'] == team1_id) & (data['Player'].isin(lineUp[team1_id]))]
    players_team2 = data[(data['Team ID'] == team2_id) & (data['Player'].isin(lineUp[team2_id]))]
    # players_team1 = data[(data['Team ID'] == team1_id)]
    # players_team2 = data[(data['Team ID'] == team2_id)]
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
    
    print(batsmen_sorted)
    print(bowlers_sorted)
    print(all_rounders_sorted)
    print(wicket_keepers_sorted)

    # Concatenate all selected players into one dataframe
    selected_players = pd.concat([selected_batsmen, selected_bowlers, selected_all_rounders, selected_wicket_keepers])

    # print(selected_players)
    
    captainSelection(selected_players)
    return selected_players

def captainSelection(selected_players):
    data = selected_players

    # Define weights for different performance indicators (adjust these weights based on your requirements)
    weight_sr = 0.4  # Weight for strike rate
    weight_wickets = 0.5  # Weight for wickets taken
    # weight_runs = 0.3  # Weight for runs scored
    weight_runs_given = 0.2 #Weight for runs given by bowler

    # Calculate performance score for each player
    data['Performance'] = (data['next_SR'] * weight_sr) + (data['next_wkts'] * weight_wickets) + (data['next_runs_given'] * weight_runs_given)

    # Sort players by performance score in descending order
    players_sorted_by_performance = data.sort_values(by='Performance', ascending=False)

    # Display the players sorted by performance score
    # print(players_sorted_by_performance[['Player','Performance']])

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

@app.route('/points')
def points():
    return render_template('points.html')


@app.route('/pricing')
def pricing():
    return render_template('pricing.html')



if __name__ == '__main__':
    selected_players = select_top_players("RCB", "MI")
    # print(selected_players)
    app.run(debug=True)
    

export default function mockData () {
    
    // Use mock data
    const apiData =
    {
        // User
        apiDataUser: [
            {
                data: {
                    id: 1,
                    userInfos: {firstName: "MockDataExemple", lastName: "DATA", age: 31},
                    todayScore: 0.12,
                    score: 0.12, // I added this because some user have no 'todayScore' key but 'score' instead
                    keyData: {calorieCount: 1930, proteinCount: 155, carbohydrateCount: 290, lipidCount: 50}
                },
            }
        ],

        // Activity
        apiDataActivity: [
            {
                data: {
                    userId: 12,
                    sessions: [
                        {day: "2020-07-01", kilogram: 80, calories: 240},
                        {day: "2020-07-01", kilogram: 83, calories: 250},
                        {day: "2020-07-01", kilogram: 90, calories: 230},
                        {day: "2020-07-01", kilogram: 70, calories: 270},
                        {day: "2020-07-01", kilogram: 83, calories: 250},
                        {day: "2020-07-01", kilogram: 92, calories: 290},
                        {day: "2020-07-01", kilogram: 75, calories: 270},
                    ]
                }
            }
        ],

        // Average-sessions
        apiDataAverage: [
            {
                data: {
                    userId: 12,
                    sessions: [
                        {day: 1, sessionLength: 30},
                        {day: 2, sessionLength: 23},
                        {day: 3, sessionLength: 45},
                        {day: 4, sessionLength: 50},
                        {day: 5, sessionLength: 0},
                        {day :6, sessionLength: 0},
                        {day: 7, sessionLength: 60}
                    ]
                }
            }
        ],

        // Performance
        apiDataPerformance: [
            {
                data: {
                    userId: 12,
                    kind: {
                        1: "cardio",
                        2: "energy",
                        3: "endurance",
                        4: "strength",
                        5: "speed",
                        6: "intensity"
                    },
                    data: [
                        {value: 80, kind:1},
                        {value: 120, kind:2},
                        {value: 140, kind:3},
                        {value: 50, kind:4},
                        {value: 200, kind:5},
                        {value: 90, kind:6}
                    ]
                }
            }
        ]
    }

    return apiData
}
 
export default function mockData () {
    
    // Use mock data
    const apiData =
    {
        // User
        apiDataUser: [
            {
                data: {
                    id: 1,
                    userInfos: {firstName: "MockDataExample", lastName: "DATA", age: 31},
                    todayScore: 0.70,
                    score: 0.70, // I added this because some user have no 'todayScore' key but 'score' instead
                    keyData: {calorieCount: 2200, proteinCount: 120, carbohydrateCount: 200, lipidCount: 70}
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
                        {day: "2020-07-02", kilogram: 83, calories: 250},
                        {day: "2020-07-03", kilogram: 90, calories: 230},
                        {day: "2020-07-04", kilogram: 70, calories: 270},
                        {day: "2020-07-05", kilogram: 83, calories: 250},
                        {day: "2020-07-06", kilogram: 92, calories: 290},
                        {day: "2020-07-07", kilogram: 75, calories: 570},
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
                        {day: 3, sessionLength: 0},
                        {day: 4, sessionLength: 50},
                        {day: 5, sessionLength: 0},
                        {day :6, sessionLength: 80},
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
                        {value: 180, kind:1},
                        {value: 200, kind:2},
                        {value: 200, kind:3},
                        {value: 150, kind:4},
                        {value: 250, kind:5},
                        {value: 180, kind:6}
                    ]
                }
            }
        ]
    }

    return apiData
}
 
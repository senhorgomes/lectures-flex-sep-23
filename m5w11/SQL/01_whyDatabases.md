Tweeter -> Tweets would be stored in a .json file

```js
tweets: {
    1: {
        id: 1,
        tweet: "Hello",
        user: "Bob"
    },
    2: {
        id: 2,
        tweet: "Good evening!",
        user: "Shrek"
    },
    3: {
        id: 3,
        tweet: "Today was a good day.",
        user: "ARandomUser"
    },
    4: {
        id: 4,
        tweet: "Hi world!",
        user: "Bob"
    },
    //....
}
```

The data only persists as long as the app is running.
Why don't we store it in a JSON file
A million tweets Size of the JSON file
fs readfile -> VERY SLOW
What if we wanted to edit the list of tweets?
Foreign key names MUST be singular (user_id, tweet_id) 

Schema

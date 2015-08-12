
# Playing around with React

via the official Tutorial: https://facebook.github.io/react/docs/tutorial.html


# The data

- [data/legislators.json](data/legislators.json) - Congressmember information, including Twitter account handles, as [collected by Sunlight Foundation](https://sunlightlabs.github.io/congress/).
- [data/congress-twitter-users.json](data/congress-twitter-users.json) - A list of Twitter accounts that belong to Congressmembers.
- [data/tweet-stream.json](data/tweet-stream.json) - a collection of 1,200 recent (as of August 8, 2015), chronologically-sorted tweets from Congressmember accounts. This is meant to simulate a [GET lists/statuses call](https://dev.twitter.com/rest/reference/get/lists/statuses)
- [data/tweets](data/tweets) - JSON files of 20 tweets for each Congressmember. Meant to simulate a [GET statuses/user_timeline call](https://dev.twitter.com/rest/reference/get/statuses/user_timeline).

# Developing instructions

Using React-tools to rebuild the `/built` directory:

    node_modules/react-tools/bin/jsx --watch jsx built-jsx

## Clone Github
```GIT
Git clone https://github.com/erisamsudin/SimpleApiExpressJS.git
```

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 10 or higher is required.

First Clone This Repo

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

## Connection And Database
Create Table log_api for Task Number 2 (Simple API)
```SQL
CREATE TABLE `log_api` (
	`apiurl` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`date_request` DATETIME NULL DEFAULT '2008-01-01 01:01:01',
	`status_request` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci'
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
```



Set The Connection.js On Middleware Folder, with your MYSQL Account
```javascript
const dbServer = mysql.createConnection({
  host     : "localhost",
  user     : "theuser",
  password : "thepassword",
  database : "thedb"
});
```

## RUNNING APPS

[`NODEMON` command] for Run the Code


[`NPM TEST` command] for Run Unit Testing



## LIST TEST
1. Simple Database querying
    - Answer : 
    ```sql
    SELECT a.id,a.username,b.username AS parentusername FROM USER a LEFT JOIN USER b ON a.parent=b.id ORDER BY a.id ASC;
    ```
2. Please write a small ExpressJS server to search movies from http://www.omdbapi.com/ The Backend should :
    Have 2 endpoint named "/search" with GET method and "/detail" with GET method
    (single movie detail)
    - Answer `/search` : `http://localhost:3000/search/batman` (GET) `batman` it's example for search value
    - Answer `/detail` : `http://localhost:3000/detail/thor` (GET) `thor` it's example for search value
3. Please refactor the code below to make it more concise, efficient and readable
with good logic flow
    - Answer `detail/Logic` : `http://localhost:3000/detail/Logic` (POST)

    ```javascript
        function NewFunction(str) {
        let findstart = str.indexOf("(");
        let findend = str.indexOf(")");
            if (findstart >= 0) {
                let newString = str.substring(parseInt(findstart,)+parseInt(1), findend)
                return newString;
                
            } else {
                return '';
            }        
        }
    ```

4.  Logic Test Anagram
    - Answer `detail/Refactor` : `http://localhost:3000/detail/Refactor` (POST)
    
    The Body
    ```json
    {
        "data" : "([Abdulsdd]))"
    }
    ```

    ```javascript
        let collectAnagrams = (words) => {
        let anagrams = {}
        let collectedAnagrams = []

        for (let word of words) {
            let letters = word.split('').sort().join('')
            anagrams[letters] = anagrams[letters] || []
            anagrams[letters].push(word)
        }
        for (let key in anagrams) {
            collectedAnagrams.push(anagrams[key])
        }
        return collectedAnagrams

    }
    let words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
    res.status(200).json({ data: collectAnagrams(words) });
    return;
    ```


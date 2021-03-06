Animals exercise
=================

# The exercise

Your job is to write a command-line interface in Node.js. This program has to filter a list of elements containing a pattern.

In the following file (https://gist.github.com/tomsquest/ab2fb73bebefdf0c30da6a7a06cb05f0), there are 
Countries containing 
Peoples containing 
Animals.

Sample of running the command and the expected output:

```
// Only animals containing `ry` are displayed. The order should be kept intact
$ node app.js --filter=ry
[
   { name: 'Satanwi',
     people:
      [ { name: 'Elmer Kinoshita',
          animals:
           [ { name: 'Wrysel' },
        { name: 'Cora Howell',
          animals:
           [ { name: 'Rrya' },
             { name: 'Pronryorn' } ] },
        { name: 'Anthony Bruno',
          animals:
           [ { name: 'Caryxcal' },
             { name: 'Tryantula' },
             { name: 'Oryx' } ] } ] } ]
...
]
```
Bonus:

As a bonus point, the next goal is to count People and Animals by adding the count of children in the name, eg. Satanwi [2].

Example:
```
node app.js --count
[
  { name: 'Satanwi [1]',
     people:
      [ { name: 'Elmer Kinoshita [1]',
          animals:
           [ { name: 'Wrysel' },
        { name: 'Cora Howell [2]',
          animals:
           [ { name: 'Rrya' },
             { name: 'Pronryorn' } ] },
        { name: 'Anthony Bruno [3]',
          animals:
           [ { name: 'Caryxcal' },
             { name: 'Tryantula' },
             { name: 'Oryx' } ] } ] } ]
...
]
```
Requirements
The code must be available in a GIT repository
No library/modules should be used, except for the testing library
Appreciation
Code readability, structure and consistency
Tests, how they are written
Bonus: usage of Functional concepts

# How to set up the project

In the project directory
run `npm i`

# How to run the exercise

In the project directory
run `node src/index.js --count --filter=ry`
(all arguments are optionals)

# How to run the unit tests

In the project directory
run either

`npm run test`

or 

`npm run tdd` (in watch mode)




Have fun :-)


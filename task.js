//query:1. Find all the topics and tasks which are thought in the month of October
 answer :db.zen.find({$or: [{topic_date:
       {$gte : new Date("<2020-10-01>"),
        $lte: new Date("<2020-10-31>")}},
        {task_date: {$gte : new Date("<2020-10-01>"), 
        $lte: new Date("<2020-10-31>")}}]},
        {topics: 1, tasks: 1}).toArray();

//query:2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
answer :db.zen.find({company_drives_date: 
        {$gte : new Date("<2020-10-15>"), 
          $lte: new Date("<2020-10-31>")}},
         {company_drives: 1}).toArray();

//query:3. Find all the company drives and students who are appeared for the placement.
answer :db.zen.find({placement:
      {$eq: "Appeared"}},
       {_id: 0, user: 1, company_drives: 1}).toArray();

//query:4. Find the number of problems solved by the user in codekata
answer :db.zen.find({},
         {user: 1, codekata: 1}).toArray();
 
//query:5. Find all the mentors with who has the mentee's count more than 15
answer :db.zen.aggregate([
        {$group: {_id: "$mentors", count: {$sum: 1}}},
        {$match: {_id: {$ne: null}, count: {$gt: 15}}}]);
         db.zen.find({mentors: "mani"},{user: 1, mentors: 1});

//query:6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
answer :db.zen.find
         ({$or: [{attendance: "Absent"}, 
         {task_date: {$not: {$gte: new Date("<2020-10-15>"),
         $lte: new Date("<2020-10-31>")}}}]});
Work plan

dissertation, to be done by this sunday (27/3/2016)
1. finish abstact
2. finish introduction
3. add database design

List of TODO's (16/3/16) Wednesday
1. form for dynamic algorithm
2. animation of 
	- merge sort [peter's working on this]
	- insertion sort
3. program for
	- knapsack algorithm [done, need to bind values to form] [working on this]
	- fractional knapsack algorithm
	- rod cutting problem
	- matrix multiplication problem
4. dissertation
	- introduction 
	- design

13/3/2016 (Sunday) THIS WEEK
- completed the code(s) for 
	- merge sort, animation needs to be done [done]
- Start on the animation on some of the dynamic algorithms
	- knapsack
	- matrix multiplication
	- rod cutting problem
- fix links on the nav bar [done]
	- will not work if link is to its own page for some reason

19/2/2016 (Friday)
- [todo] Something is wrong with the form input. textbox and buttons are not responding when clicked. sort it out!
- [findings] having less intervals for the animation allows the animation to be smoother. 

Too slow!
@keyframes index1animation {
    0%   {background-color:red; left:100px; top:50px;}
    12.5% {background-color:red; left:107.5px; top:62.5px;}
    25%  {background-color:red; left:115px; top:75px;}
    37.5% {background-color:red; left:122.5px; top:87.5px;}
    50%  {background-color:red; left:130px; top:100px;}
    62.5% {background-color:red; left:137.5px; top:87.5px;}
    75%  {background-color:red; left:145px; top:75px;}
    87.5% {background-color:red; left:152.5px; top:62.5px;}
    100% {background-color:red; left:160px; top:50px;}
}

18/2/2016 (Thursday)
- dummy data for sort algorithm
- dummy data for knapsack algorithm

13/2/2016 (Saturday)
- Sort form
	- [todo] retrieving the values that is inserted in the sort form in an ajax/JSON format

12/2/16 (Friday)
- Sort form
	- [done] No. of index
		- [DONE] Able to retrieve data using jquery without the need to refresh the page. 
		- [done] Values in the index (form will generate the amount of fields here)

10/2/2016 (Wednesday)
- [TODO] Input page for each for the algorithms, forms!
- [DONE] Need to add relevant database to support the data model
- [DONE] Update the database model in Visio
- [TODO] Start working on these algorithms (Finish by the end of this week Saturday 13/2/2016)
	- Insertion Sort
	- Fractional Knapsack Problem
	- Knapsack Problem

7/2/16 (Sunday)
- [DONE] Link to specific algorithms on the side nav bar
- [DONE] Delete some of the unused controllers and views

- Created both Azure and local database
- Using database first method!
- Added a LINQ class for the tables in the local database
- Inner joined two tables (Algorithms and ParadigmType) into a single LINQ query
	- Using the result, show it onto the View [DONE]
	SELECT ...
	FROM Algorithms
	JOIN ParadigmTypes on ParadigmTypeId = Id
	WHERE Algorithms.Id = 1


6/2/2016 (Saturday)
- Create a local database
- Need to do ViewModels

3/2/2016 (Wednesday)
- [UI] Finished most of the UI on the main page. Need to design custom logos for each buttons
- [UI] Added a side navigational bar on the other layout of the page. 
	- Need to make them dynamic [TODO]
- [UI] Need to design the other segments of the layout in the pages [TODO]

1/1/2016 (Monday)
- [DESIGN] Main page layout of the program
- [DESIGN] The layout for other bits of the program

12/11/2015 
Complete these diagrams before the weekends (before 14/11/2015)
- Requirements specification [done.]
- UML case diagram [done]
- UML Class diagram [in progress]
- Interface diagram ?
- Flowchart of the software [done. to add into report]

NOTE:
- Should I include the bit where the program can make its own dynamic programming? etc?

To complete during the weekends (14/11/2015 & 15/11/2015)
- Algorithms of the animations (Psuedo code)
- Design of the animations
- evaluation list
- Might need to test animation on platform ****
- writeup of the design
- UI Design of the software

What to include in the writeup? [finish by saturday 14/11/2015]
1 - Summary of proposal
	- brief statement of the background [done]
	- aims and objectives of the project [done]
	- necessary changes made from previous report [not sure to do this]
	- summary of research and analysis carried out so far 

2 - Design [finish latest by Sunday 15/11/2015]
	- description of anticipated components of the system and how are they organised

	design chapter structure
	- functional and non-functional requirements [done]
	- UML case diagram [done]
	- flowchart diagrams [done]
	- ui design diagrams [done]
	- UML class diagram [in progress - still need classes for individual algorithms]
	- sequence diagram [done]
	- animation algorithm designs [15/11/15]
	- animation psuedo code [15/11/15]
	- evaluation design [15/11/15]

3 - Review against plan [finish latest by Monday 16/11/2015]
	- plan produced as part of the specification
		- what has been completed
		- progress made up to this date
	- any necessary changes need to make
	- gantt chart

algorithms to use
-----------------
1 - greedy algorithm
	- fractional knapsack problem [done]
	- activity selection problem
	- huffman codes

2 - divide and conquer
	- merge sort 
	- matrix multiplication

3 - dynamic programming
	- knapsack problem
	- rod cutting problem

4 - sorting algorithms
		binary search tree
		merge and sort

Sunday
Fractional knapsack problem [done] 
Knapsack problem [done]
Activity Selection Problem [done]

Monday
Merge sort [done]
Matrix Multiplication [done]
Rod cutting problem [done]

Tueday
Bubble sort [done]
Insertion sort [done]

Wednesday
Afternoon
Class diagram [done]
Evaluation list [done]

Review against plan 
	- the information page
	- appendix page
	- adding a local database into the program for the extra features

Psuedo code [only done for some algorithms]
Presentation slides
human data shizz

Last minute changes
- bibliography
- grammar mistakes
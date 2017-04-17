# Zayo Market Visualizations
Jennings Anderson, Melissa Bica, Kyle Frye, Chase Kregor, Taylor Lawrence

## Visualizations
//REMOVE Information about your visualizations and what they show. Include information about interactions as appropriate.

The first vis on the page is a map showing all of Zayo's buildings (from `ZayoHackathonData_Buildings.csv`). Filtering options are included on the right to filter by whether the building is on/off the Zayo network, whether the building is an "opportunity" (from `ZayoHackathonData_Opportunities.csv`), and the types of products that building has purchased (from `ZayoHackathonData_Services.csv`).

The bar chart shows the prevalence of each product type across buildings (from `ZayoHackathonData_Buildings.csv` and `ZayoHackathonData_Services.csv`). The bar chart is interactive with the main map in that clicking on a bar for a specific product filters the buildings represented on the map to buildings which have purchased those products.

Finally, the scatterplot shows the total profit (calculated as MRR - MRC from `ZayoHackathonData_Services.csv`) for each building in increasing order. 

## Design Process 
//REMOVE (e.g., how did you go about designing, building, and refining your system? Why did you choose these representations?)

We drew out wireframes at several meetings to help develop our ideas and have a visual representation of a final system to work toward throughout development. We refined our system through team discussions in which we weighed the pros and cons of each in relation to the outcome of providing useful visual analytic tools for Zayo. We chose these visualizations as we believe they are intuitive for both the types of data we are working with and for our customers to interact with and gain insight from. 
We did have a lot of ideas floating around when trying to decide what visualizations to make for Zayo. One in particular, we were trying to merge the idea of "Market size" with "cost" to ultimately show what location would be the largest market, as well as each markets cost. We decided to scrap the idea after lots of number crunching and realizing the scales of the two measurements were completely different and could not be put together as one visualization. 
Going along with a some what similar mindset we ended up deciding that making a visualization that shows the relationship between buildings in the three selected locations, and the product that was used at those locations, and instead of calculating "Cost" we decided to calculate what the Monthly Reoccurring Revenue (MRR), minus the Monthly Reoccurring Cost (MRC) to see what the total profit would be for each building. Doing this, we could find where the best place to build would be, and also, which location brought in the most revenue. 
## Team Roles
* **Jennings**: map vis, data preprocessing, interactions between vises
* **Melissa**: bar chart, scatterplot, data preprocessing
* **Kyle**: data preprocessing, visual design
* **Taylor**: individual contributor 
* **Chase**: data interpretation, project management

## How to Run: 
[https://info-4602-5602.github.io/project1-globo-gym-purple-cobras/](https://info-4602-5602.github.io/project1-globo-gym-purple-cobras/)

*(Wait a few moments for the data to appear on the map, and refresh the page if no data appears within 5 or so seconds.)*

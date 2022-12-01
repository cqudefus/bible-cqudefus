|   **Board**  |    **Branch**     |  **Explained** |  **Notes**  |
|----------|:-------------:|-----------:| -------:|
|**Backlog**|                  |  Upcoming tasks |   |
|**To do**   |               |            |         |
|**In Progress**   |  Localhost Dev    |      In currently in Dev (Localhost)      |  The developer does their Dev on their locally, then push on development to do Dev testing. Do a screenshot, then send a pull request for the Test. Pull requests will get a code review alongside your testing document with screenshots. When accepted, they will move along to conduct the same testing in Test. Then, move the Jira to QA.  |
|       **Review**   |               |            |         |
|       **Ready for Testing**   |               |            |         |
|       **Testing**   |      Test         |Team QA - Testing, this is your team member QA person and the      |     QA will conduct tests and view the developers’ test results. When happy, the QA will move the ticket to Alpha. QA will ask Dev to send another pull request for Alpha.    |
|       **Alpha (Demo)**   |        Alpha       |      Alpha is an experiment’s environment for **dark release**. This release is available to early adopters, mostly within the company.  Developer to do a demo of the business before going to beta     |       An environment is to do validated learning. The idea is for all stakeholders (Businesspersons involved, product owners, designers, and developers) to do validated learning. In the form of researching to get feedback on ton experiment, supply value to the customer or if the bug is fixed and no other issues or improvement can be made. The most important thing is to interact with customers.A ticket cannot move past Alpha until we get validated learning. And no new tickets can go into a sprint while the board is full (Set max number) Meanwhile, we gather the feedback that the stakeholder is documenting the experiment (in detail) from their point of view. All in one wiki or word document for others  |
|        **Beta**  |            Beta   |      Running the experiment and doing a release to a specific group of 30min users, the aim is to gather matrices.      |         |
|      **QA**   |   QA            |      All the testing that needs to be actioned against the feature, e.g., White box testing, Gorilla Testing, and Security Testing.      |    The gatekeepers of the systems or app, making sure everything fits perfectly.     |
|      **Release candidate**    |       RC        |       When a Jira is ready for production     |    List of Jira’s that are ready to be released into production, staging     |
|   **Production**       |          Master     |        Post-production must be performed    |    List of Jira’s that are ready to be released into production, staging     |
|      **Done**    |               |       Jira’s to be achieved.     |         |

## Agile (Kanban) (Website)

|   **Board**  |    **Branch**     |  **Explained** |  **Notes**  |
|----------|:-------------:|-----------:| -------:|
| **Backlog**| | |
| **To do** | | |
| **In Progress** | Localhost  Dev| In currently in Dev (Localhost) | The developer does their Dev locally, then push on development to do Dev testing. Do a screenshot, then submit a pull request for the Test. Pull requests will get a code review alongside your testing document with screenshots. When accepted, the Dev will conduct the same test in Test. Then, move the Jira to QA.|
|              **Review**    |           Feature branch        |                |                    |
|             **Ready for Testing**     |        Test           |                |                    |
|        **Test**          |           Test        |                |                    |
|              **QA**    |       QA            |      All the testing that needs to be actioned against the feature, e.g., White box testing, Gorilla Testing, and Security Testing.          |            The gatekeepers of the systems or app, making sure everything fits perfectly.        |
|        **Release candidate**          |        RC           |        When a Jira is ready for production        |        List of Jira’s that are ready to be released into production, staging            |
|          **Production**        |          Master         |         Post-production must be performed       |           For a ticket to move production, validated learning must be successful the metrics must be positive.         |
|        **Done**          |                   |           Jira’s to be achieved.     |                    |

##Branches

|     |    **MVP stage 1**     |  **MVP stage 2** |  **MVP stage 3**  | **Production** |
|----------|:-------------:|-----------:| -------:| -----------:|
|**App/System**|dev, test, alpha, master= *alpha*| dev, test, alpha, beta, master= _beta_| dev, test, alpha, beta, QA, RC, master |dev, test, alpha, beta, QA, RC, master=*v1* |
| **Website**| dev, master | dev, test, RC, master | dev, test, QA, RC, master | dev, test, QA, RC, master=*v1* |

*  dev
* test
* Qa
* RCRC
* master

# Documentations

In each story, everyone must get a ticket where they will do their documentation. All parties involved must document their actions and solutions in an attractive, structured manner. All parties will include their URLs in the ticket description. They will document this on their respective [platforms](Cqudefus%20-%20Software%20Documentation.docx).

Documentation tickets must also go thru QA.

	o  Developer – When asking for RC code review. You must also include your wiki pages

	o  Designer – Folder your designers and explain them and structure them for the next person

	o  Product Owner – Specs must be sorted in a lovely manner, and clean up your tickets     

## Pull Request

Set some git request rules (you can set requirements before the user sends PR)

* PR Title
	* Jira number/issue number with Description

# Jira Explained

* Epic – Large portion of work
	* Example: **Building a website**
* Story / Task [[Ma1]](#_msocom_1) – Smaller portion of work
	* Example: **Login Page, Navigation Menu**
* Sub-Task – All the tasks related to completing the Story/Task
	* Example: UI Design, API creation, Front End
* Bug
	* Example:

## Building an MVP

* Building an MVP requires a different mindset, not what we are used to as professionals. An MVP is evaluating the hypnosis of the concept

Building this MVP can be a few technologies. It is just us evaluating the hypnosis of the concept.

# Agile

**Agile means continuous incremental improvement through small and frequent releases.**
* Each team must set its value and principal in how they want to work
	* These will help with decision-making.
	* Each scrum team member must consider these values and principles when making decisions.
* For speed and collaboration

# Project Management

How we will run our project depends on the application or software, or team
* Project Management will use: **Lean Six Sigma**
* Project development, we will incorporate the below PM methodologies
* ***Agile**
	* Each team must set its value and principal in how they want to work
		* These will help with decision-making.
		* Each scrum team member must consider these values and principles when making decisions.
	* For speed and collaboration.
* ***Scrum**
	* Delivery in a sprint
* ***Lean** **development**
	* Minimise waste, focus on what matters, and develop what brings value to the user.
* ***Kanban**
	* Minimise work in progress
	* Supply visibility to the team.
	* One task per time. No multitasking is involved.  %%//Remember to breakdown tasks into smaller tasks%%
	* You cannot work on everything at a time  %%//the is no such thing as multitasking, only switch-tasking.%%
	* **Six Sigma**
		* Improve current product & progress to meet customer needs
		* Process improvement and removing defects
* ***Adaptive**
	* Make sure the is a live version of the product. If something is wrong with v3, then have v2 in production.
	* The whole point of adaptive is that the user still uses the product despite small bugs. Just make sure the product is live and supplying value to the user 

  

# Sprint

There should be two sprints per month, resulting in 2 weeks of sprints (+-10 days).

-   Sprint Review – Task that is finished
-   Provide sprint Team Reports.

-   Spring retrospective – Scrum Team discussion about how things were

## Documentations

In each story, everyone must get a ticket where they will do their documentation. All parties involved must document their actions and solutions in an attractive structured manner. All parties will include their URLs on the ticket description, and they will document them on their respective platforms.

-   A documentation ticket must also go thru QA.
-   Developer – When asking for RC code review. You must also include your wiki pages
-   Designer – Folder, your designers and explain them and structure them for the next person
-   Product Owner – Specs must be sorted in a lovely manner, and clean up your tickets

## Pull Request

Set some git request rules (you can set requirements before the user sends PR)
-   PR Title
	- Jira number/issue number with Description

## Jira Explained

Stories are not system requirements; they are written in English and described in a sentence, like a vibe. Add multilevel nav to the home page for mobile.

-   **Epic** – Large part of the work
	- Example: **Building a website**
* ***Story / Task** – Smaller part of the work
	* Example: **Login Page, Navigation Menu**
* ***Sub-Task** – All the tasks related to completing the Story/Task
	* Example: **UI Design, API creation, Front End**

## Bug
* Example:

### Building an MVP
* Building an MVP requires a different mindset, not what we are used to as professionals. An MVP is evaluating the hypnosis of the concept
* Building this MVP does not need many technologies. It is just us evaluating the hypnosis of the concept

| Environment | Board | Branch | Explained | Notes |
|:-----------:|:-----------------:|:-------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Development | Backlog | | Upcoming tasks | |
| | Todo | | | |
| | In Progress | Localhost Dev | In currently in Dev (Localhost) | The developer does their Dev locally, then pushes <br>on development to do Dev testing. First, do a screenshot, <br>then submit a pull request for the Test. Pull requests <br>will get a code review alongside your testing <br>document with screenshots. When accepted, the <br>Dev will conduct the same Test in Test. <br>Then, move the Jira to QA. |
| | | | | |
| QA | QA | Test | Quality Assurance - Testing | QA will conduct tests and view the developers’ test results. <br>When happy, the QA will move the ticket to Alpha. Finally, QA will ask Dev to submit another pull request for Alpha. |
| | Alpha (Demo) | Alpha | | An environment is to do validated learning; <br>the idea is for all stakeholders (Businesspersons <br>involved, product owners, designers, and <br>developers) to do validated learning. <br>In the form of researching to get feedback <br>on the experiment to provide value to the <br>customer or if the bug is fixed and no <br>other issues or improvements can <br>be made. The most important thing <br>is to interact with customers. |
| | Beta | Beta | Alpha is an experimental environment <br>for dark release. <br>This release is available to early adopters, <br>mostly within the company. <br>Developer to do a demo of the <br>business before doing beta | A ticket cannot move past Alpha until we get validated <br>learning. And no new tickets can go into <br>a sprint while the board is full (Set max number) <br>Meanwhile, we gather the feedback that the <br>a stakeholder is documenting the experiment <br>(in detail) from their point of view. <br>All in one wiki or word document for others |
| | Release candidate | RC | When a Jira is ready for production | List of Jira’s that are ready to be released <br>into production, staging |
| Done | Production | Master | Post-production must be performed. | For a ticket to move production, validated <br>learning must be successful, the metrics <br>must be positive. |
| | Done | | Jira’s to be achieved. | |

# Team Hierarchy

![[Pasted image 20221201212720.png]]

# Team

## Focus

It is an especially important element in a company, like sub-projects within a project. Mean, within the team, small sub-teams focus on that experiment.
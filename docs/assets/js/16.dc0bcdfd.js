(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{385:function(t,a,s){t.exports=s.p+"assets/img/fig_1.859ae8a2.png"},415:function(t,a,s){"use strict";s.r(a);var e=s(46),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"week-9-managing-data-using-firebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#week-9-managing-data-using-firebase"}},[t._v("#")]),t._v(" Week 9 - Managing Data Using Firebase")]),t._v(" "),e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/l_0OpoGtigw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),e("h3",{attrs:{id:"how-can-i-persist-data-in-my-web-applications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-persist-data-in-my-web-applications"}},[t._v("#")]),t._v(" How can I persist data in my web applications?")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("h2",{attrs:{id:"session-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-dependencies"}},[t._v("#")]),t._v(" Session Dependencies")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://github.com/joeappleton18/contemp-web-app-solutions.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Make sure that you have the latest of the ongoing class, fitness tracker, project. "),e("strong",[t._v("The notes for this week refer extensively to this project")]),e("OutboundLink")],1),t._v(". Ensure you have the latest version of this project.")]),t._v(" "),e("p",[t._v("This week's, and future, setups are a little more involved. You will need to ensure that you add your own firebase credentials. The "),e("code",[t._v("README.md")]),t._v(" file on my version of the fitness tracker walks you through how to do this.")])]),t._v(" "),e("h3",{attrs:{id:"essential-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#essential-reading"}},[t._v("#")]),t._v(" Essential Reading 📕")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://firebase.google.com/docs/firestore",target:"_blank",rel:"noopener noreferrer"}},[t._v("The cloud firestore overview"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://firebase.google.com/docs/firestore/data-model",target:"_blank",rel:"noopener noreferrer"}},[t._v("The cloud firestore data model"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"optional-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optional-reading"}},[t._v("#")]),t._v(" Optional Reading 📕")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.youtube.com/watch?v=G04w_k3TPTs&t=131s",target:"_blank",rel:"noopener noreferrer"}},[t._v("Not reading but watching, this is a tutorial by Tod, the firebase developer advocate, on structuring firebase data. I suggest you jump to the sections on data structuring"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("This week, we are going to be exploring cloud Firestore, the database offering by Firebase. Out of the box, we get a powerful, scalable database.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Do not confuse Firestore with the Realtime Database. The Realtime database is a older, more simplistic, database product. For new projects you should be using Firestore.")])]),t._v(" "),e("h2",{attrs:{id:"a-little-bit-about-the-firestore-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-little-bit-about-the-firestore-database"}},[t._v("#")]),t._v(" A little bit about the Firestore database")]),t._v(" "),e("p",[t._v("Cloud Firestore is a NoSQL, document-oriented database. There are three main types of NoSQL-databases: document-based, column-based and graph-base. Cloud Firestore is of the document-based variety.")]),t._v(" "),e("p",[t._v("In a document-based database, your application's data is stored in documents in a JSON like structure. Documents live in collections. If you come from a relational database world, collections are like tables. If your application requires it, you can also structure sub-collections within documents. We will explore how this works through examples. As this is not a database unit, I am not overly focusing on data modeling.")]),t._v(" "),e("p",[t._v("One of the fundamental rules of non-relational data modeling is we try and represent data from a user-first perspective. In other words, we want to structure our data so it can be simply displayed in our application's users interface.")]),t._v(" "),e("h2",{attrs:{id:"setting-up-the-firestore-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-firestore-database"}},[t._v("#")]),t._v(" Setting up the Firestore Database")]),t._v(" "),e("p",[e("img",{attrs:{src:s(385),alt:""}})]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("Figure 1, creating a database")])])]),t._v(" "),e("p",[t._v("Creating a database for your project is simple:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("In your firebase project, select Database from the left-hand-side, develop menu section")])]),t._v(" "),e("li",[e("p",[t._v("Next, click the "),e("code",[t._v("Create database")])])]),t._v(" "),e("li",[e("p",[t._v("We want to start off in test mode, so select this option when prompted")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("h2",{attrs:{id:"task-1-setting-up-a-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-1-setting-up-a-database"}},[t._v("#")]),t._v(" Task 1 - Setting up a database")]),t._v(" "),e("p",[t._v('Follow the steps above to set up your database - ensure that you set it up in "test" mode.')])]),t._v(" "),e("h2",{attrs:{id:"structuring-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#structuring-data"}},[t._v("#")]),t._v(" Structuring Data")]),t._v(" "),e("p",[t._v("Remember, the data in our database is created from the perspective of a user. To highlight this point let's consider, first, our check-in functionality and data that it outputs.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("h2",{attrs:{id:"task-2-exploring-the-check-in-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-2-exploring-the-check-in-data"}},[t._v("#")]),t._v(" Task 2 - Exploring the check-in data")]),t._v(" "),e("ul",[e("li",[t._v("Log-in to your application")]),t._v(" "),e("li",[t._v("Navigate to the "),e("code",[t._v("/checkin")]),t._v(". You can use the link in the menu or just type the URL in")]),t._v(" "),e("li",[t._v("Next, within "),e("code",[t._v("Views/Checkin.js")]),t._v(" work out how to set up a "),e("code",[t._v("handleSubmit")]),t._v(" function that logs to the console the checkin.")])]),t._v(" "),e("HiddenSection",{attrs:{"display-text":"click me for a hint"}},[e("ul",[e("li",[e("p",[t._v("Add a "),e("code",[t._v("onSubmit()")]),t._v(" event handler to the CheckInForm component: "),e("code",[t._v("<CheckinForm onSubmit={handleSubmit}/>")])])]),t._v(" "),e("li",[e("p",[t._v("Set up an event handler function within your Checkin function:")])])]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Checkin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleSubmit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("checkin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("checkin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])])],1),t._v(" "),e("p",[t._v("On completing the above task you will have seen that our check-in data looks like this:")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        exercise"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n        veg"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        water"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        diet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n        comment"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n        total"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n        drinkPen"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n        foodPen"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("The above data structure is close to resembling a document that could be stored in our database. However, look at our application's main dash and you can see that we do not have enough information to display a check-in. For now, I am most concerned that we are missing a userName, userId and photo. This information needs to be added to our check-in object.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("You may think, why not just add a userId to our check-in and we could look the rest up. Remember, though, we are optimising for quick reads and data structures that resemble our UI. Yes, we are duplicating data; however, this idea, know as denormalisation, is fine in the NoSQL world.")])]),t._v(" "),e("p",[t._v("With the above mantras in mind we want to create the following data structure:")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        exercise"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n        veg"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        water"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        diet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n        comment"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n        total"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n        drinkPen"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n        foodPen"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional fields")]),t._v("\n        photo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"joephotourl"')]),t._v("\n        userName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"joe appleton"')]),t._v("\n        userId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vDyPgsU41CMrFK29bmN4lULK6JN2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        time"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wed Mar 18 2020 10:03:31 GMT+0000 (Greenwich Mean Time)"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("h2",{attrs:{id:"task-3-denormalisation-of-the-checkin-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-3-denormalisation-of-the-checkin-data"}},[t._v("#")]),t._v(" Task 3 - Denormalisation of the checkin data")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Can you structure our current checkin object so it resembles our data structure above")])]),t._v(" "),e("li",[e("p",[t._v("First, you will need to pass our user from App.js down to our Checkin component.")]),t._v(" "),e("ul",[e("li",[t._v("In "),e("code",[t._v("App.js")]),t._v(" pass our user, which has been exported from useAuth, into the checkin component "),e("code",[t._v("<Checkin createCheckin={createCheckin} user={user} />")])]),t._v(" "),e("li",[t._v("Within checkin, set up a "),e("code",[t._v("user")]),t._v(" "),e("code",[t._v("prop-type")])]),t._v(" "),e("li",[t._v("See if you can amend the "),e("code",[t._v("handleSubmit")]),t._v(" function so it adds the extra user fields to our checkin object when the form submits.")]),t._v(" "),e("li",[t._v("There is a slight gotcha, if someone has signed up using email or Google they may not have a userName in which case we want to use their email instead (users always have an email). In JavaScript, you can use the following technique to assign a default value:")])]),t._v(" "),e("p",[e("code",[t._v("const userName = user.displayName || user.email")]),t._v(";")])])]),t._v(" "),e("HiddenSection",{attrs:{"display-text":"hint"}},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("const handleSubmit =  async checkin => {\n\n    const ckin = {...checkin,\n                  ...{photo: user.photoURL,\n                      userId: user.uid,\n                      userName: user.displayName || user.email,\n                      time: new Date()}}\n}\n")])])])])],1),t._v(" "),e("h2",{attrs:{id:"reading-and-writing-to-our-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-and-writing-to-our-database"}},[t._v("#")]),t._v(" Reading and Writing to Our Database")]),t._v(" "),e("h2",{attrs:{id:"writing-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-data"}},[t._v("#")]),t._v(" Writing Data")]),t._v(" "),e("p",[t._v("To use the firestore database in our application, we first need to import it.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Within "),e("code",[t._v("/src/App.js")]),t._v(" add "),e("code",[t._v('import "firebase/firestore";')]),t._v(" to your imports. Make sure it is after the firebase import.")])]),t._v(" "),e("li",[e("p",[t._v("Next, we are going to create a "),e("code",[t._v("useCheckin")]),t._v(" service hook that will manage our check-in's collection.")])]),t._v(" "),e("li",[e("p",[t._v("Create a "),e("code",[t._v("src/services/firebase/useCheckin.js")]),t._v(" file and add the following code:")])])]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCheckins")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fStore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ref "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fStore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("collection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checkins'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("createCheckin")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("checkin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ref"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("checkin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("readCheckin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("  ref"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("readCheckins")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("  ref"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("create"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" read"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" useCheckins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("Let's unpack what we are doing above:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("fStore")]),t._v(" is a reference to our database that will be passed in by app")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("const ref = fStore().collection('checkins');")]),t._v(" is a pointer to a checkins collection in our database. If the collection does not exist it will be created, it will be automatically created when the first document is written to the collection")])]),t._v(" "),e("li",[e("p",[t._v("We then use the above ref set up functions to add a new checkin "),e("code",[t._v("ref.add(checkin);")]),t._v(" and also to read our all of the checkin documents from our collection "),e("code",[t._v("ref.get();")])])]),t._v(" "),e("li",[e("p",[t._v("Finally, we return our functions so they can be used in other components: "),e("code",[t._v("return {createCheckin, readCheckin, listCheckin}")])])]),t._v(" "),e("li",[e("p",[t._v("We are now ready to use our checkin hook in our "),e("code",[t._v("src/App.js")]),t._v(" component:")]),t._v(" "),e("ul",[e("li",[t._v("If you have not done so already, "),e("code",[t._v('import "firebase/firestore";')])]),t._v(" "),e("li",[t._v("Also, import the checkIn hook: "),e("code",[t._v('import useCheckin from "./services/firebase/useCheckin";')])]),t._v(" "),e("li",[t._v("Finally, within your app component, call your checkin hook like this:")])])]),t._v(" "),e("li",[e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        createCheckin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        readCheckins\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCheckins")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firebase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firestore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("h2",{attrs:{id:"task-4-make-your-first-database-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-4-make-your-first-database-write"}},[t._v("#")]),t._v(" Task 4 - Make your first database write")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Pass the checkin "),e("code",[t._v("createCheckin")]),t._v(" function down to our "),e("code",[t._v("checkIn")]),t._v(" view as a prop")])]),t._v(" "),e("li",[e("p",[t._v("See if you can write a checkin to the database")]),t._v(" "),e("HiddenSection",{attrs:{"display-text":"hint 1"}},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("       <Checkin  createCheckin={createCheckin}  user={user} />\n")])])])])],1),t._v(" "),e("li",[e("p",[t._v("This is what my final Checkin component looks like:")])])])])])]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Checkin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createCheckin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleSubmit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("checkin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ckin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("checkin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("photo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("photoURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCheckin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ckin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),e("p",[t._v("If the above worked, you should now have data in your database. Let's, finally, consider how to read the data.")]),t._v(" "),e("h2",{attrs:{id:"reading-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-data"}},[t._v("#")]),t._v(" Reading Data")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Let's see if we can pull our checkins into our dash. First, from within our "),e("code",[t._v("App.js")]),t._v(" component , we need to pass "),e("code",[t._v("readCheckins")]),t._v(" into our dash component "),e("code",[t._v("<Dash readCheckins={readCheckins} checkins={checkins} />")])])]),t._v(" "),e("li",[e("p",[t._v("Within our "),e("code",[t._v("Views/Dash.js")]),t._v(" component we need to grab "),e("code",[t._v("readCheckins")]),t._v(" from our props")])])]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("checkins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readCheckins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("ul",[e("li",[t._v("Next we should set up some state to hold our checkins")])]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("allCheckins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setAllCheckins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Finally we can set up an effect that calls our "),e("code",[t._v("readCheckins")]),t._v(" function")])]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getAllCheckins")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" aCheckins "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("readCheckins")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" checkins "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      aCheckins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" checkins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllCheckins")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("checkins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllCheckins")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("ul",[e("li",[e("p",[t._v("Notice how I set up a nested async function within the useEffect function - which I immediately call. This is because React advises against making the useEffect function async as it could delay the render time.")])]),t._v(" "),e("li",[e("p",[t._v("Firebase does not return our collection's data, instead, it provides a references to the data. The collection reference returned, provides us with a "),e("code",[t._v("forEach")]),t._v(" method, which I use to construct a checkins array and set the value of that array to our "),e("code",[t._v("allCheckins")]),t._v(" state.")])])]),t._v(" "),e("h2",{attrs:{id:"home-study"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#home-study"}},[t._v("#")]),t._v(" Home Study")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("h2",{attrs:{id:"task-5-display-the-checkin-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-5-display-the-checkin-data"}},[t._v("#")]),t._v(" Task 5 - Display the checkin data")]),t._v(" "),e("ul",[e("li",[t._v("Can you update the dash so it displays checkins from our database")]),t._v(" "),e("li",[t._v("At the moment you will still need to use placeholder data for the histogram, we'll solve this issue next week.")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("h2",{attrs:{id:"task-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-6"}},[t._v("#")]),t._v(" Task 6")]),t._v(" "),e("ul",[e("li",[t._v("Can you create a new collection and an associated hook. The collection will be called "),e("code",[t._v("Challenges")]),t._v(" . For now, it will hold a single document, containing "),e("code",[t._v("challengeName")]),t._v(", "),e("code",[t._v("challengeStartDate")]),t._v(", "),e("code",[t._v("challengeEndDate")])]),t._v(" "),e("li",[t._v("See if you can use your new hook, to read the the single challenge document. You can use this data to populate the top part of our main dash")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("h2",{attrs:{id:"task-7-advanced"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-7-advanced"}},[t._v("#")]),t._v(" Task 7 (Advanced)")]),t._v(" "),e("p",[t._v("Can you work out how to implement the comment functionality?")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
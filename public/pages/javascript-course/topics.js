const jsCourseTopics = [
  { part: 1, time: "00:00:00", title: "JavaScript for Beginners" },
  { part: 1, time: "00:05:04", title: "Setting Up Environment" },
  { part: 1, time: "00:16:53", title: "Save and Work on GitHub" },
  { part: 1, time: "00:27:14", title: "let, const, var" },
  { part: 1, time: "00:43:54", title: "Data Types and ECMAScript Standards" },
  { part: 1, time: "01:01:55", title: "Data Type Conversion Confusion" },
  { part: 1, time: "01:14:46", title: "Why String to Number" },
  { part: 1, time: "01:29:46", title: "Comparison of Data Types" },
  { part: 1, time: "01:38:38", title: "Data Types Summary" },
  { part: 1, time: "01:56:40", title: "Stack and Heap Memory" },
  { part: 1, time: "02:06:34", title: "String in JavaScript" },
  { part: 1, time: "02:29:17", title: "Number and Math" },
  { part: 1, time: "02:52:34", title: "Date and Time" },
  { part: 1, time: "03:10:47", title: "Array in JavaScript" },
  { part: 1, time: "03:29:42", title: "Array Part 2" },
  { part: 1, time: "03:45:23", title: "Objects in Depth" },
  { part: 1, time: "04:03:31", title: "Objects Part 2" },
  { part: 1, time: "04:21:13", title: "Object Destructuring and JSON API" },
  { part: 1, time: "04:34:46", title: "Functions and Parameters" },
  { part: 1, time: "04:53:59", title: "Functions with Objects" },
  { part: 1, time: "05:05:14", title: "Global and Local Scope" },
  { part: 1, time: "05:14:51", title: "Scope Level and Mini Hoisting" },
  { part: 1, time: "05:29:47", title: "this and Arrow Function" },
  { part: 1, time: "05:48:16", title: "Immediately Invoked Function" },
  { part: 1, time: "05:55:33", title: "How JavaScript Works Behind the Scene" },
  { part: 1, time: "06:21:45", title: "Control Flow in JavaScript" },
  { part: 1, time: "07:14:34", title: "for Loop, break and continue" },
  { part: 1, time: "07:39:05", title: "while and do-while Loop" },
  { part: 1, time: "07:49:24", title: "Higher Order Array Loops" },
  { part: 1, time: "08:23:35", title: "filter, map and reduce" },
  { part: 2, time: "00:00:00", title: "DOM Introduction" },
  { part: 2, time: "00:18:25", title: "All DOM Selectors" },
  { part: 2, time: "00:59:58", title: "How to Create a New Element" },
  { part: 2, time: "01:27:42", title: "Edit and Remove DOM Elements" },
  { part: 2, time: "01:48:40", title: "Build 4 JavaScript Projects" },
  { part: 2, time: "03:22:53", title: "Events in JavaScript" },
  { part: 2, time: "03:59:49", title: "Async Code" },
  { part: 2, time: "04:19:01", title: "2 Projects with Async" },
  { part: 2, time: "05:00:07", title: "API Request and V8 Engine" },
  { part: 2, time: "05:30:41", title: "Promise in JavaScript" },
  { part: 2, time: "06:21:01", title: "Now You Know fetch" },
  { part: 2, time: "06:39:38", title: "Object Oriented JavaScript" },
  { part: 2, time: "07:11:40", title: "Magic of Prototype" },
  { part: 2, time: "07:59:47", title: "call and this" },
  { part: 2, time: "08:12:53", title: "Class Constructor" },
  { part: 2, time: "08:39:29", title: "bind" },
  { part: 2, time: "08:51:07", title: "Now You Know Objects" },
  { part: 2, time: "09:10:53", title: "Getters and Setters" },
  { part: 2, time: "09:42:16", title: "Lexical Scope and Closure" },
  { part: 2, time: "10:09:04", title: "JavaScript Ends with a Story" }
];

function levelForIndex(index) {
  if (index <= 12) return "Beginner";
  if (index <= 30) return "Intermediate";
  return "Advanced";
}

function getKeywordTips(title) {
  const t = title.toLowerCase();

  if (t.includes("let") || t.includes("const") || t.includes("var")) {
    return {
      concepts: [
        "Use const by default and let only when reassignment is required.",
        "Block scope prevents accidental variable leaks.",
        "Clear variable naming makes debugging easier."
      ],
      code: "const appName = \"Hunter Store\";\nlet activeUsers = 3;\n\nif (activeUsers < 5) {\n  let status = \"growing\";\n  console.log(status);\n}\n\nactiveUsers += 2;\nconsole.log(`${appName}: ${activeUsers} users online`);",
      extraCode: "let count = 0;\ncount += 1;\n\nconst taxRate = 0.18;\nconst finalAmount = 1000 + (1000 * taxRate);\n\nconsole.log({ count, finalAmount });",
      task: "Create 5 cart-related variables and update quantity safely using let and const."
    };
  }

  if (t.includes("data type") || t.includes("ecmascript") || t.includes("conversion") || t.includes("comparison")) {
    return {
      concepts: [
        "Use strict equality (===) to avoid type coercion bugs.",
        "Convert incoming values explicitly with Number, String, and Boolean.",
        "Validate data type before calculations."
      ],
      code: "const rawPrice = \"499\";\nconst rawDiscount = \"50\";\n\nconst price = Number(rawPrice);\nconst discount = Number(rawDiscount);\nconst finalPrice = price - discount;\n\nconsole.log({ price, discount, finalPrice });\nconsole.log(finalPrice === 449);",
      extraCode: "const id = \"42\";\nconst parsedId = Number(id);\n\nconsole.log(typeof parsedId);\nconsole.log(parsedId === 42);\nconsole.log(parsedId == \"42\");",
      task: "Convert API string fields into correct types and compute final order value."
    };
  }

  if (t.includes("stack") || t.includes("heap")) {
    return {
      concepts: [
        "Primitive values are copied by value.",
        "Objects and arrays are copied by reference.",
        "Use spread syntax to avoid accidental mutation."
      ],
      code: "const a = 10;\nlet b = a;\nb = 20;\n\nconst user1 = { name: \"Priyanshu\" };\nconst user2 = { ...user1 };\nuser2.name = \"Riya\";\n\nconsole.log({ a, b, user1, user2 });",
      extraCode: "const profile = { city: \"Delhi\" };\nconst sameRef = profile;\nsameRef.city = \"Mumbai\";\n\nconsole.log(profile.city); // Mumbai",
      task: "Show one primitive copy and one object copy example and explain the output."
    };
  }

  if (t.includes("string")) {
    return {
      concepts: [
        "Use template literals for dynamic readable strings.",
        "Normalize user input with trim and replace.",
        "Split-map-join pattern is great for formatting text."
      ],
      code: "const fullName = \"  Priyanshu sharma  \";\nconst normalized = fullName.trim().replace(/\\s+/g, \" \" );\nconst titleCase = normalized\n  .split(\" \" )\n  .map((part) => part[0].toUpperCase() + part.slice(1))\n  .join(\" \" );\n\nconsole.log(titleCase);",
      extraCode: "const sentence = \"learn javascript daily\";\nconsole.log(sentence.includes(\"javascript\"));\nconsole.log(sentence.toUpperCase());\nconsole.log(sentence.slice(0, 5));",
      task: "Build a username formatter that trims spaces and converts to lowercase with hyphens."
    };
  }

  if (t.includes("number") || t.includes("math")) {
    return {
      concepts: [
        "Use Number.isFinite for safe numeric checks.",
        "Round money calculations intentionally.",
        "Math helpers simplify common calculations."
      ],
      code: "const subtotal = 999.99;\nconst taxRate = 0.18;\nconst tax = Number((subtotal * taxRate).toFixed(2));\nconst total = Number((subtotal + tax).toFixed(2));\n\nconsole.log({ subtotal, tax, total });",
      extraCode: "const ratings = [4.2, 3.8, 4.9];\nconst rounded = ratings.map((n) => Math.round(n));\nconsole.log(rounded);\nconsole.log(Math.max(...ratings));",
      task: "Create a GST calculator that outputs subtotal, tax, and total with 2 decimals."
    };
  }

  if (t.includes("date") || t.includes("time")) {
    return {
      concepts: [
        "Store timestamps in ISO format.",
        "Use milliseconds for date differences.",
        "Render user-friendly text in UI layer."
      ],
      code: "const createdAt = new Date(\"2026-03-06T09:30:00Z\");\nconst now = new Date();\nconst elapsedMs = now.getTime() - createdAt.getTime();\nconst elapsedHours = Math.floor(elapsedMs / (1000 * 60 * 60));\n\nconsole.log(`Created ${elapsedHours} hours ago`);",
      extraCode: "const due = new Date();\ndue.setDate(due.getDate() + 7);\nconsole.log(due.toISOString());\nconsole.log(due.toLocaleDateString());",
      task: "Display labels like 'Joined 3 days ago' from an ISO timestamp."
    };
  }

  if (t.includes("array") || t.includes("map") || t.includes("filter") || t.includes("reduce")) {
    return {
      concepts: [
        "Use map/filter/reduce for clean data pipelines.",
        "Avoid mutating original arrays unless required.",
        "Use reduce for totals and grouped summaries."
      ],
      code: "const products = [\n  { name: \"Keyboard\", price: 1200, inStock: true },\n  { name: \"Mouse\", price: 700, inStock: false },\n  { name: \"Headset\", price: 2500, inStock: true }\n];\n\nconst available = products.filter((p) => p.inStock);\nconst bill = available.reduce((sum, p) => sum + p.price, 0);\n\nconsole.log({ available, bill });",
      extraCode: "const marks = [50, 80, 95, 70];\nconst passed = marks.filter((m) => m >= 60);\nconst average = passed.reduce((s, n) => s + n, 0) / passed.length;\nconsole.log({ passed, average });",
      task: "Create a cart summary that filters out-of-stock products and calculates final bill."
    };
  }

  if (t.includes("object") || t.includes("json") || t.includes("prototype") || t.includes("class") || t.includes("getter") || t.includes("setter")) {
    return {
      concepts: [
        "Model data with clear object structure.",
        "Use class syntax when behavior is shared across instances.",
        "Getters and setters help keep logic around properties."
      ],
      code: "class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n\n  get label() {\n    return `${this.name} - Rs.${this.price}`;\n  }\n}\n\nconst keyboard = new Product(\"Mechanical Keyboard\", 3499);\nconsole.log(keyboard.label);",
      extraCode: "const user = { name: \"Priyanshu\", city: \"Delhi\" };\nconst payload = JSON.stringify(user);\nconst parsed = JSON.parse(payload);\nconsole.log(parsed.city);",
      task: "Create a Product class with getter `discountedPrice` and test with 3 objects."
    };
  }

  if (t.includes("function") || t.includes("parameter")) {
    return {
      concepts: [
        "Keep functions small and single-purpose.",
        "Use default parameters for safer APIs.",
        "Return values rather than mutating global state."
      ],
      code: "function calculateTotal(items, taxRate = 0.18) {\n  const subtotal = items.reduce((sum, item) => sum + item.price, 0);\n  const tax = Number((subtotal * taxRate).toFixed(2));\n  return Number((subtotal + tax).toFixed(2));\n}\n\nconst cart = [{ price: 499 }, { price: 899 }];\nconsole.log(calculateTotal(cart));",
      extraCode: "function greet(name = \"Guest\") {\n  return `Hello, ${name}`;\n}\n\nconsole.log(greet());\nconsole.log(greet(\"Priyanshu\"));",
      task: "Write a reusable function that calculates order total with optional discount."
    };
  }

  if (t.includes("scope") || t.includes("hoisting") || t.includes("this") || t.includes("arrow") || t.includes("iife") || t.includes("closure") || t.includes("call") || t.includes("bind")) {
    return {
      concepts: [
        "Lexical scope controls variable visibility.",
        "Arrow functions inherit `this` from parent scope.",
        "Closures store private state across calls."
      ],
      code: "function createCounter(start = 0) {\n  let value = start;\n  return {\n    next() {\n      value += 1;\n      return value;\n    },\n    current() {\n      return value;\n    }\n  };\n}\n\nconst counter = createCounter(10);\nconsole.log(counter.next(), counter.current());",
      extraCode: "const profile = {\n  name: \"Priyanshu\",\n  regular() { return this.name; },\n  arrow: () => this?.name\n};\n\nconsole.log(profile.regular());\nconsole.log(profile.arrow());",
      task: "Build a counter with increment and reset methods using closure."
    };
  }

  if (t.includes("control flow") || t.includes("for loop") || t.includes("while") || t.includes("break") || t.includes("continue")) {
    return {
      concepts: [
        "Choose for/while based on stop condition.",
        "Use break and continue only when it improves readability.",
        "Prefer clear conditions over deeply nested blocks."
      ],
      code: "const orders = [1200, 0, 499, 1500, -1, 900];\nlet validCount = 0;\n\nfor (const amount of orders) {\n  if (amount < 0) break;\n  if (amount === 0) continue;\n  validCount += 1;\n}\n\nconsole.log(`Valid orders: ${validCount}`);",
      extraCode: "let i = 1;\nwhile (i <= 5) {\n  console.log(`Step ${i}`);\n  i += 1;\n}",
      task: "Scan numbers, skip zeros, and stop when sentinel -1 appears."
    };
  }

  if (t.includes("dom") || t.includes("event") || t.includes("element") || t.includes("selector")) {
    return {
      concepts: [
        "Cache selectors and update DOM in small steps.",
        "Use event delegation for dynamic elements.",
        "Separate data logic from rendering logic."
      ],
      code: "const todoList = document.querySelector(\"#todo-list\");\n\ntodoList.addEventListener(\"click\", (event) => {\n  if (!event.target.matches(\"button.remove\")) return;\n  const row = event.target.closest(\"li\");\n  if (row) row.remove();\n});",
      extraCode: "const title = document.querySelector(\"h1\");\nif (title) {\n  title.textContent = \"JavaScript Practice Mode\";\n}\n\nconst button = document.querySelector(\"#save-btn\");\nif (button) button.disabled = false;",
      task: "Create add/remove functionality for a to-do list with one delegated listener."
    };
  }

  if (t.includes("async") || t.includes("promise") || t.includes("fetch") || t.includes("api") || t.includes("v8")) {
    return {
      concepts: [
        "Use async/await for readable async flows.",
        "Check `response.ok` before reading JSON.",
        "Always handle API failure gracefully."
      ],
      code: "async function loadUsers() {\n  const endpoint = \"https://jsonplaceholder.typicode.com/users\";\n\n  try {\n    const response = await fetch(endpoint);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n\n    const users = await response.json();\n    console.log(`Loaded ${users.length} users`);\n    return users;\n  } catch (error) {\n    console.error(\"User fetch failed:\", error.message);\n    return [];\n  }\n}",
      extraCode: "function wait(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\nasync function run() {\n  console.log(\"Start\");\n  await wait(500);\n  console.log(\"Done\");\n}\n\nrun();",
      task: "Fetch posts and render cards with loading, success, and error states."
    };
  }

  return {
    concepts: [
      "Start with one clear use case.",
      "Write small, readable functions.",
      "Check edge cases to avoid runtime bugs."
    ],
    code: "function normalizeTopicName(input) {\n  return input.trim().toLowerCase().replace(/\\s+/g, \"-\");\n}\n\nconst slug = normalizeTopicName(\" JavaScript Practice Daily \" );\nconsole.log(slug);",
    extraCode: "const values = [\" JS \", \"HTML\", \" css\"];\nconst normalized = values.map((v) => v.trim().toLowerCase());\nconsole.log(normalized);",
    task: "Create one utility function for this topic and test at least 3 edge cases manually."
  };
}

function getTopicNumber(index) {
  return String(index).padStart(2, "0");
}

function topicFile(index) {
  return `topic-${getTopicNumber(index)}.html`;
}

function renderTopicListPage() {
  const part1Root = document.getElementById("part1-list");
  const part2Root = document.getElementById("part2-list");
  if (!part1Root || !part2Root) return;

  jsCourseTopics.forEach((topic, i) => {
    const index = i + 1;
    const a = document.createElement("a");
    a.className = "topic-link";
    a.href = topicFile(index);
    a.innerHTML = `<small>#${getTopicNumber(index)} | ${topic.time}</small><strong>${topic.title}</strong>`;

    if (topic.part === 1) part1Root.appendChild(a);
    else part2Root.appendChild(a);
  });

  const total = document.getElementById("total-topics");
  if (total) total.textContent = String(jsCourseTopics.length);
}

function renderSingleTopicPage(index) {
  const topic = jsCourseTopics[index - 1];
  if (!topic) return;

  const tips = getKeywordTips(topic.title);
  const prev = jsCourseTopics[index - 2];
  const next = jsCourseTopics[index];

  document.getElementById("topic-id").textContent = `#${getTopicNumber(index)}`;
  document.getElementById("topic-title").textContent = topic.title;
  document.getElementById("topic-time").textContent = `${topic.time} (Part ${topic.part})`;
  document.getElementById("topic-level").textContent = levelForIndex(index);
  document.getElementById("topic-overview").textContent =
    `${topic.title} builds your JavaScript foundation through practical examples and clear syntax understanding.`;

  const keyList = document.getElementById("topic-concepts");
  tips.concepts.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    keyList.appendChild(li);
  });

  document.getElementById("topic-code").textContent = tips.code;

  const extraCodeEl = document.getElementById("topic-extra-code");
  if (extraCodeEl && tips.extraCode) {
    extraCodeEl.textContent = tips.extraCode;
  }

  document.getElementById("topic-exercise").textContent = tips.task;

  const prevBtn = document.getElementById("prev-topic");
  if (prev) {
    prevBtn.href = topicFile(index - 1);
    prevBtn.textContent = `< Previous: ${prev.title}`;
  } else {
    prevBtn.href = "index.html";
    prevBtn.textContent = "< Back to Topic List";
  }

  const nextBtn = document.getElementById("next-topic");
  if (next) {
    nextBtn.href = topicFile(index + 1);
    nextBtn.textContent = `Next: ${next.title} >`;
  } else {
    nextBtn.href = "index.html";
    nextBtn.textContent = "Finish Course >";
  }
}

window.jsCourseTopics = jsCourseTopics;
window.renderTopicListPage = renderTopicListPage;
window.renderSingleTopicPage = renderSingleTopicPage;
window.topicFile = topicFile;
window.getTopicNumber = getTopicNumber;

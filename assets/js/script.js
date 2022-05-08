// Load references to commonly used elements
var currentDayEl = $("#currentDay");
var mainEl = $("main");

// The schedule array declaration
// Note array index is 0-8 to represent 0=9 AM, 1=10 AM, etc. to 8=5 PM
var schedule;

// Load today's date in desired format e.g. Saturday, May 7th
var now = moment().format("dddd, MMMM Do");
// Show the current day
$(currentDayEl).text(now);

// Load schedule from localStorage, if it does not exist create an empty one
var loadSchedule = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
    // If no schedule in localStorage
    if (!schedule) {
      // Initialize empty schedule array
      schedule = [];
      // push empty string
      for (i=0;i<9;i++) schedule.push("");
      // Save the new schedule to localStorage
      saveSchedule();
    };
};

// Save the schedule to localStorage
var saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

// This loads the schedule, whether empty or full, to the main page
var loadScheduleEl = function() {
    // First load the schedule from localStorage
    loadSchedule();

    // Empty the section of the page with the schedule
    mainEl.empty();

    // Recreate the schedule
    for (i=0;i<9;i++) {
        // time to display is just the hour and AM/PM
        let time = moment().hour(i+9).format("hA");
        let hour = $("<div>").addClass("col-2 bg-white p-3 hour").text(time);
        let p = $("<p>").text(schedule[i]);
        let text = $("<div>").addClass("col-8 p-2 past").append(p);
        let icon = $("<img>").addClass("btnInvert").attr("src","./assets/images/floppy-31.svg").attr("alt","Save").attr("width","20px");
        let save = $("<div>").addClass("col-2 text-center p-4 saveBtn").append(icon);
        let hourRow = $("<div>").addClass("row").attr("id","list-"+i).append(hour, text, save);
        $(mainEl).append(hourRow);
    }

    // Change the background colors to indicate past, present, future
    updateBackgrounds();
};

// On click of text div, swap in a textarea with the contents of <p> and focus on it
$("#schedule").on("click",".col-8", function() {
    $(this).find("p").replaceWith($("<textarea>")
    .addClass("form-control")
    .val($(this).text().trim()));
    $("textarea").trigger("focus");
});

/* I'd rather do this with blur but there is a save button, so use it!
$("#schedule").on("blur","textarea", function() {
    let text = $(this).val().trim();
    let element = $(this).closest(".row").attr("id").replace("list-","");
    schedule[element] = text;
    saveSchedule();
    let textP = $("<p>").text(text);
    $(this).replaceWith(textP);

});
*/

// Save edited text for this hour
$("#schedule").on("click",".saveBtn", function() {
    // Get id of row and load into arrayIndex
    let arrayIndex = $(this).closest(".row").attr("id").replace("list-","");
    // Find textarea element if it exists on this row
    let textArea = $(this).closest(".row").find("textarea");
    // If no textarea on this row ignore the button click
    if (textArea.length === 0) return 0;
    // Load changed text
    let text = textArea.val().trim();
    // Save changed text into array
    schedule[arrayIndex] = text;
    // Save schedule to localStorage
    saveSchedule();
    // Create new <p> element and load it with the new text
    let textP = $("<p>").text(text);
    // Replace textarea with p
    textArea.replaceWith(textP);
});

// Iterate over rows and color based on past, present and future
var updateBackgrounds = function() {
    for (i=0;i<9;i++) {
        // load hour with the hour right now, subtract 9 to get the list- index
        let hour = moment().hour()-9;
        // Find the textElement div
        let textElement = $("#schedule").find("#list-"+i).find(".col-8");
        // Remove all time classes
        $(textElement).removeClass("past present future");
        // Add a time class based on time right now compared to hour of row
        if (i<hour) $(textElement).addClass("past");
        if (i===hour) $(textElement).addClass("present");
        if (i>hour) $(textElement).addClass("future");
    }
};

// Load schedule from localStorage, load page, color text boxes
loadScheduleEl();
// Every 60 seconds update backgrounds if hour has changed
setInterval(updateBackgrounds,60000);
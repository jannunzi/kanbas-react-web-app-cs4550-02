import KanbasNavigation from "../../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../../CourseNavigation/CourseNavigation.js";

function AssignmentEditor() {
  return `
    <table border="1" width="100%">
  <tr>
    <td valign="top">
    ${KanbasNavigation()}
    </td>
    <td valign="top">
      ${CourseNavigation("Assignments")}
    </td>
    <td valign="top">
      <label for="assignmentName"> Assignment Name </label>
      <div>
        <input
          id="assignmentName"
          title="This is the name of the assignment"
          value="A1 - HTML"
          placeholder="Assignment 1"
        />
      </div>
      <label>Description</label>
      <br />
      <textarea cols="40" rows="10">
This is the descriptiuon of the assignment
</textarea
      >
      <div>
        Points
        <input type="number" value="98" max="100" min="50" step="5" />
      </div>
      Submission Type<br />
      <input type="checkbox" checked /> Text Entry <br />
      <input id="url" type="checkbox" /> <label for="url">Website URL</label>
      <br />
      <label><input type="checkbox" /> Media Recordings</label><br />
      <input type="checkbox" /> File Uploads
      <div>
        Favorite Color:
        <input type="radio" name="color" /> Red
        <input name="color" type="radio" /> Blue
        <input type="radio" name="color" /> Green
      </div>
      <div>
        Favorite Genres:
        <input type="radio" name="genres" /> Rock
        <input type="radio" name="genres" /> Blues
        <input type="radio" name="genres" /> Disco
      </div>
      <div>
        Due Date
        <input
          type="date"
          value="2023-09-15"
          min="2023-09-05"
          max="2023-09-23"
        />
      </div>
    </td>
  </tr>
</table>
`;
}

export default AssignmentEditor;

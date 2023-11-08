import axios from "axios";

export const fetchCourses = async () => {
  const response = await axios.get("http://localhost:4000/api/courses");
  return response.data;
};

export const deleteCourse = async (courseId) => {
  const response = await axios.delete(
    `http://localhost:4000/api/courses/${courseId}`
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(
    "http://localhost:4000/api/courses",
    course
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `http://localhost:4000/api/courses/${course._id}`,
    course
  );
  return response.data;
};

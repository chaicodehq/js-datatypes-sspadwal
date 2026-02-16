/**
 * 📝 School Report Card Generator
 *
 * Sharma ji ke bete ka report card generate karna hai! Student ka naam aur
 * subjects ke marks milenge, tujhe pura analysis karke report card banana hai.
 *
 * Rules:
 *   - student object: { name: "Rahul", marks: { maths: 85, science: 92, ... } }
 *   - Calculate using Object.values() and array methods:
 *     - totalMarks: sum of all marks (use reduce)
 *     - percentage: (totalMarks / (numSubjects * 100)) * 100,
 *       rounded to 2 decimal places using parseFloat(val.toFixed(2))
 *     - grade based on percentage:
 *       "A+" (>= 90), "A" (>= 80), "B" (>= 70), "C" (>= 60), "D" (>= 40), "F" (< 40)
 *     - highestSubject: subject name with highest marks (use Object.entries)
 *     - lowestSubject: subject name with lowest marks
 *     - passedSubjects: array of subject names where marks >= 40 (use filter)
 *     - failedSubjects: array of subject names where marks < 40
 *     - subjectCount: total number of subjects (Object.keys().length)
 *   - Hint: Use Object.keys(), Object.values(), Object.entries(),
 *     reduce(), filter(), map(), Math.max(), Math.min(), toFixed()
 *
 * Validation:
 *   - Agar student object nahi hai ya null hai, return null
 *   - Agar student.name string nahi hai ya empty hai, return null
 *   - Agar student.marks object nahi hai ya empty hai (no keys), return null
 *   - Agar koi mark valid number nahi hai (not between 0 and 100 inclusive),
 *     return null
 *
 * @param {{ name: string, marks: Object<string, number> }} student
 * @returns {{ name: string, totalMarks: number, percentage: number, grade: string, highestSubject: string, lowestSubject: string, passedSubjects: string[], failedSubjects: string[], subjectCount: number } | null}
 *
 * @example
 *   generateReportCard({ name: "Rahul", marks: { maths: 85, science: 92, english: 78 } })
 *   // => { name: "Rahul", totalMarks: 255, percentage: 85, grade: "A",
 *   //      highestSubject: "science", lowestSubject: "english",
 *   //      passedSubjects: ["maths", "science", "english"], failedSubjects: [],
 *   //      subjectCount: 3 }
 *
 *   generateReportCard({ name: "Priya", marks: { maths: 35, science: 28 } })
 *   // => { name: "Priya", totalMarks: 63, percentage: 31.5, grade: "F", ... }
 */
export function generateReportCard(student) {
  if (student === null) return null;
  if (student.name === "") return null;
  if (!Object.hasOwn(student, "name")) return null
  if (!Object.hasOwn(student, "marks")) return null
  if (Object.keys(student.marks).length === 0) return null
  const obj_entry = Object.entries(student.marks)
  const marks_Array = obj_entry.map((item) => item[1])
  const max_marks = Math.max(...marks_Array)
  const min_marks = Math.min(...marks_Array)
  if (max_marks > 100) return null
  if (min_marks < 0) return null
  const is_Mark_String = marks_Array.some(item => typeof item !== "number")
  if (is_Mark_String) return null
  // Your code here
  const student_name = student.name;
  console.log(obj_entry)
  const numSubjects = obj_entry.length;
  const totalMarks = obj_entry.reduce((a, b) => a + b[1], 0)
  const percentage = parseFloat((((totalMarks / (numSubjects * 100)) * 100)).toFixed(2))
  let grade = null;
  if (percentage >= 90) grade = "A+"
  else if (percentage >= 80) grade = "A"
  else if (percentage >= 70) grade = "B"
  else if (percentage >= 60) grade = "C"
  else if (percentage >= 40) grade = "D"
  else {
    grade = "F"
  }
  const markCollection = Object.entries(student.marks)
  console.log(markCollection)
  const highestSubject = markCollection.reduce((a, b) => (b[1] > a[1] ? b : a));
  const lowestSubject = markCollection.reduce((a, b) => (b[1] < a[1] ? b : a));
  const d = markCollection.filter((item) => { return { item } })
  const a = obj_entry.filter((item) => item[1] >= 40)
  const passedSubjects = a.map((item) => item[0])
  const b = obj_entry.filter((item) => item[1] < 40)
  const failedSubjects = b.map((item) => item[0])
  const subjectCount = (Object.keys(obj_entry)).length
  // const 
  return { name: student_name, totalMarks: totalMarks, percentage: percentage, grade: grade, highestSubject: highestSubject[0], lowestSubject: lowestSubject[0], passedSubjects: passedSubjects, failedSubjects: failedSubjects, subjectCount: subjectCount }
}

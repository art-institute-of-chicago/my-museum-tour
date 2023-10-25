import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

/**
 * Submission
 */
function Submission() {
  const { validityIssues } = useContext(AppContext);
  return (
    <>
      <h2>Submit your tour</h2>
      {validityIssues.length ? (
        <>
          <p>Fix these issue before submitting your tour:</p>
          {validityIssues.length && (
            <ul>
              {validityIssues.map((issue) => (
                <li key={issue.issue}>
                  {issue.page}: {issue.target} - {issue.issue}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p>
          Are you sure you want to submit your tour? You won't be able to make
          any more changes after this stage
        </p>
      )}
    </>
  );
}

export default Submission;

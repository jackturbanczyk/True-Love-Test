function calculateCompatibility() {
    // Retrieve values from the dropdowns
    const question1 = parseInt(document.getElementById('question1').value);
    const question2 = parseInt(document.getElementById('question2').value);
    const question3 = parseInt(document.getElementById('question3').value);
    const question4 = parseInt(document.getElementById('question4').value);
    const question5 = parseInt(document.getElementById('question5').value);

    // Ensure all questions are answered
    if (isNaN(question1) || isNaN(question2) || isNaN(question3) || isNaN(question4) || isNaN(question5)) {
        alert("Please answer all questions.");
        return;
    }

    // Calculate individual percentages for each question
    const q1Percentage = (question1 / 5) * 100;
    const q2Percentage = (question2 / 5) * 100;
    const q3Percentage = (question3 / 5) * 100;
    const q4Percentage = (question4 / 5) * 100;
    const q5Percentage = (question5 / 5) * 100;

    // Total score
    const totalScore = question1 + question2 + question3 + question4 + question5;
    const compatibilityScore = (totalScore / 25) * 100;

    // Display results with percentages for each question
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Your compatibility score is: ${compatibilityScore.toFixed(2)}%</p>
        <p>Question 1: ${q1Percentage.toFixed(2)}%</p>
        <p>Question 2: ${q2Percentage.toFixed(2)}%</p>
        <p>Question 3: ${q3Percentage.toFixed(2)}%</p>
        <p>Question 4: ${q4Percentage.toFixed(2)}%</p>
        <p>Question 5: ${q5Percentage.toFixed(2)}%</p>
    `;
}

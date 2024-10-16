function calculateCompatibility() {
  
    const question1 = parseInt(document.getElementById('question1').value);
    const question2 = parseInt(document.getElementById('question2').value);
    const question3 = parseInt(document.getElementById('question3').value);
    const question4 = parseInt(document.getElementById('question4').value);
    const question5 = parseInt(document.getElementById('question5').value);

    if (isNaN(question1) || isNaN(question2) || isNaN(question3) || isNaN(question4) || isNaN(question5)) {
        alert("Please answer all questions.");
        return;
    }

    const totalScore = question1 + question2 + question3 + question4 + question5;

    const compatibilityScore = (totalScore / 25) * 100;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your compatibility score is: ${compatibilityScore.toFixed(2)}%`;
}










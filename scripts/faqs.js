

const faqsQuestions = document.querySelectorAll('.questions');



faqsQuestions.forEach(questions=>{
    questions.addEventListener('click', ()=>{
        
        const faqItem = questions.closest('.questions_and_answers')

        const faqsAnswer = faqItem.querySelector('.faqs_answer');
        faqsAnswer.classList.toggle('open')

        
        
    })

})
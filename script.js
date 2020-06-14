function gradeFunction() {
            var nameInput = document.getElementById('studentName');
            var gradeInput = document.getElementById('studentGrade');
            var endResult = document.getElementById('result');
          
          
            if (nameInput.value.length < 2) {
                alert('The name that is entered must be at least two characters long!');
                nameInput.value = '';
                gradeInput.value = '';
                return;
            }
          
          
            if ((parseInt(gradeInput.value)) < 0 || (parseInt(gradeInput.value)) > 100) {
                alert('The grade must be between 0 and 100!');
                nameInput.value = '';
                gradeInput.value = '';
                return;
            }

            endResult.innerHTML += nameInput.value + ' with a grade of ' + gradeInput.value +'%'+'<br />'

            nameInput.value = '';
            gradeInput.value = '';
        }
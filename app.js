/**
 * @param {HTMLElement} ele - Query the DOM for specified element and return it.
 * @param clas - Class to remove from the specified html elemtne.
 */
const remove_class = (ele,clas) => {

    ele.classList.remove(clas);
    return ele;

}

const showEle = ele => ele.style.display = 'block';
const hideEle = ele => ele.style.display = 'none';


/**
 * @param {HTMLElement} ele - Query the DOM for specified element and return it.
 * @param clas - Class to be added to the specified html elemtne.
 */
const add_class = (ele,clas) => ele.classList.add(clas);


const asked_questions = document.querySelector('.asked-questions')

/**
 * @param ev - Targeted element event occure on.
 */

const angle = {
    up: 'angle-up',
    down: 'angle-down'
}

const answers = document.querySelectorAll('.answer')

const display = ev => {

    const target = ev.target;
    if(target.className.includes('question')){

        const svg = target.children[1];
        const ans = target.nextElementSibling;

        if(svg.classList == angle.down) {
            add_class(remove_class(svg,angle.down),angle.up);
            showEle(ans)
            return;
        }else{
            
            let result = Array.from(answers).find(ele => ele.style.display = 'block')
            console.log(result)
            if(!result) return;
            hideEle(result)

        }
        
    }

}
asked_questions.addEventListener('click', display)

/**
 * @param {HTMLElement} ele - Query the DOM for specified element and return it.
 * @param clas - Class to remove from the specified html elemtne.
 */
const remove_class = (ele,clas) => {

    ele.classList.remove(clas);
    return ele;

}

const element = ele => {
    return document.querySelector(`${ele}`)
}

const showEle = ele => ele.style.display = 'block';
const hideEle = ele => ele.style.display = 'none';

/**
 * @param {HTMLElement} ele - Query the DOM for specified element and return it.
 * @param clas - Class to be added to the specified html elemtne.
 */
const add_class = (ele,clas) => ele.classList.add(clas);

/**
 * @param ev - Targeted element event occure on.
 */

const angle = {
    up: 'angle-up',
    down: 'angle-down'
}

const answers = document.querySelectorAll('.answer')
const asked_questions = document.querySelector('.asked-questions')

const display = ev => {

    const target = ev.target;
    if(target.className.includes('question')){

        const result = Array.from(answers).find(val => val.style.display == 'block')
        const svg = target.children[1];
        const ans = target.nextElementSibling;

        if(svg.classList == angle.up) {
            add_class(remove_class(svg,angle.up),angle.down);
            hideEle(ans)
            return;
        }
        if(svg.classList == angle.down){
            if(result) {
                add_class(remove_class(result.previousElementSibling.lastElementChild,angle.up),angle.down);
                hideEle(result)
            };
            add_class(remove_class(svg,angle.down),angle.up);
            showEle(ans)
            return;
        }
        
    }

}
asked_questions.addEventListener('click', display)

const bookmark_feature = element('.bookmark-features')
const extensions = element('.extensions')



/**
 * Intersection Observer API - is used to add animation to an element when a page scrolls
 * Got help from the below link.
 * @Source https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
 */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('move-up');
        }
      });
});

observer.observe(bookmark_feature,extensions);
  
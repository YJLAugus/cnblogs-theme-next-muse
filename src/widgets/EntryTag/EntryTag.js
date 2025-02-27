import {
    log
} from "../../global/utils";

export function EntryTag() {

    const _tagIcon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>`


    const intval = setInterval(() => {
        if (document.querySelector('#EntryTag') || document.querySelector('#green_channel')) {
            if (document.querySelector('#EntryTag'))
                document.querySelector('#EntryTag').firstChild.data = ''
            document.querySelectorAll('#EntryTag a').forEach(e => {
                e.innerHTML = _tagIcon + e.innerHTML
            })
            clearInterval(intval)
        }
        console.log('555');
    }, 500)

}
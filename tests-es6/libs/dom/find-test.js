'use strict';

import Collection from 'libs/dom/Collection';
import find from 'libs/dom/find';

describe('libs/dom/find', () => {
    describe('find()', () => {
        let element;

        beforeEach(() => {
            element = document.createElement('ul');
            element.id = 'list';
            element.innerHTML = '<li>A</li><li>B</li><li>C</li>';

            document.body.appendChild(element);
        });

        afterEach(() => {
            document.body.removeChild(element);
        });

        it('should return a `Collection` of `Element`s', () => {
            expect(find('#list li')).toEqual(new Collection([
                element.childNodes[0],
                element.childNodes[1],
                element.childNodes[2]
            ]));
        });

        it('should return an empty `Collection` if no elements are found', () => {
            expect(find('#foo div')).toEqual(new Collection([]));
        });

        it('should allow for custom contexts', () => {
            expect(find('li', document.getElementById('list'))).toEqual(new Collection([
                element.childNodes[0],
                element.childNodes[1],
                element.childNodes[2]
            ]));
        });
    });
});

import { trigger, state, animate, style, transition } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const routerTransition: AnimationEntryMetadata = trigger('routeAnimation', [
    state('leave', style({ position: 'relative', width: '100%' })),
    state('enter', style({ position: 'relative', width: '100%' })),
    transition('* => leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ]),
    transition('* => enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ])
]);


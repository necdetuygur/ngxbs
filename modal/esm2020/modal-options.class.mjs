import { Injectable, InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalOptions {
}
ModalOptions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ModalOptions, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ModalOptions.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ModalOptions, providedIn: 'platform' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ModalOptions, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'platform' }]
        }] });
export const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {},
    closeInterceptor: void 0
};
export const MODAL_CONFIG_DEFAULT_OVERRIDE = new InjectionToken('override-default-config');
export const CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show'
};
export const SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
export const TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
export const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
    BACK: 'browser-back-navigation-clicked'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWtCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0UsTUFBTSxPQUFPLFlBQVk7O3lHQUFaLFlBQVk7NkdBQVosWUFBWSxjQURBLFVBQVU7MkZBQ3RCLFlBQVk7a0JBRHhCLFVBQVU7bUJBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDOztBQXVEcEMsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWlCO0lBQy9DLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULFFBQVEsRUFBRSxJQUFJO0lBQ2QsWUFBWSxFQUFFLEVBQUU7SUFDaEIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO0NBQ3pCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FDeEMsSUFBSSxjQUFjLENBQWUseUJBQXlCLENBQUMsQ0FBQztBQUU5RCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQWM7SUFDbkMsa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixFQUFFLEVBQUUsSUFBSTtJQUNSLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBYTtJQUNoQyxNQUFNLEVBQUUsZUFBZTtJQUN2QixXQUFXLEVBQUUsdUJBQXVCO0lBQ3BDLFlBQVksRUFBRSx3QkFBd0I7SUFDdEMsYUFBYSxFQUFFLG9EQUFvRDtDQUNwRSxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQXdCO0lBQ3ZELEtBQUssRUFBRSxHQUFHO0lBQ1YsUUFBUSxFQUFFLEdBQUc7Q0FDZCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFtQjtJQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLGlDQUFpQztDQUN4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgU3RhdGljUHJvdmlkZXIsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc05hbWUsIENsb3NlSW50ZXJjZXB0b3JGbiwgRGlzbWlzc1JlYXNvbnMsIFNlbGVjdG9yLCBUcmFuc2l0aW9uRHVyYXRpb25zIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3BsYXRmb3JtJ30pXG5leHBvcnQgY2xhc3MgTW9kYWxPcHRpb25zPFQgPSBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICAvKipcbiAgICogIEFsbG93IHVzZXIgdG8gSUQgZm9yIHRoZSBtb2RhbC4gT3RoZXJ3aXNlLCBhIHVuaXF1ZSBudW1iZXIgd2lsbCBiZSBnaXZlblxuICAgKi9cbiAgaWQ/OiBudW1iZXIgfCBzdHJpbmc7XG4gIC8qKlxuICAgKiAgSW5jbHVkZXMgYSBtb2RhbC1iYWNrZHJvcCBlbGVtZW50LiBBbHRlcm5hdGl2ZWx5LFxuICAgKiAgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXG4gICAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJztcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqL1xuICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgZm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvd3MgdGhlIG1vZGFsIHdoZW4gaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElnbm9yZSB0aGUgYmFja2Ryb3AgY2xpY2tcbiAgICovXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcbiAgICovXG4gIGNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogVG9nZ2xlIGFuaW1hdGlvblxuICAgKi9cbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogTW9kYWwgZGF0YVxuICAgKi9cbiAgaW5pdGlhbFN0YXRlPzogUGFydGlhbDxUPjtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGludGVyY2VwdCB0aGUgY2xvc3VyZVxuICAgKi9cbiAgY2xvc2VJbnRlcmNlcHRvcj86IENsb3NlSW50ZXJjZXB0b3JGbjtcbiAgLyoqXG4gICAqIE1vZGFsIHByb3ZpZGVyc1xuICAgKi9cbiAgcHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXTtcbiAgLyoqXG4gICAqIGFyaWEtbGFiZWxsZWRieSBhdHRyaWJ1dGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBtb2RhbCB3aW5kb3dcbiAgICovXG4gIGFyaWFMYWJlbGxlZEJ5Pzogc3RyaW5nO1xuICAvKipcbiAgICogYXJpYS1kZXNjcmliZWRieSBhdHRyaWJ1dGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBtb2RhbCB3aW5kb3dcbiAgICovXG4gIGFyaWFEZXNjcmliZWRieT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IG1vZGFsQ29uZmlnRGVmYXVsdHM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZSxcbiAgc2hvdzogZmFsc2UsXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxuICBjbGFzczogJycsXG4gIGFuaW1hdGVkOiB0cnVlLFxuICBpbml0aWFsU3RhdGU6IHt9LFxuICBjbG9zZUludGVyY2VwdG9yOiB2b2lkIDBcbn07XG5cbmV4cG9ydCBjb25zdCBNT0RBTF9DT05GSUdfREVGQVVMVF9PVkVSUklERTogSW5qZWN0aW9uVG9rZW48TW9kYWxPcHRpb25zPiA9XG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxNb2RhbE9wdGlvbnM+KCdvdmVycmlkZS1kZWZhdWx0LWNvbmZpZycpO1xuXG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRTogQ2xhc3NOYW1lID0ge1xuICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gIEZBREU6ICdmYWRlJyxcbiAgSU46ICdpbicsXG4gIFNIT1c6ICdzaG93J1xufTtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SOiBTZWxlY3RvciA9IHtcbiAgRElBTE9HOiAnLm1vZGFsLWRpYWxvZycsXG4gIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UOiAnLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQnXG59O1xuXG5leHBvcnQgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTlM6IFRyYW5zaXRpb25EdXJhdGlvbnMgPSB7XG4gIE1PREFMOiAzMDAsXG4gIEJBQ0tEUk9QOiAxNTBcbn07XG5cbmV4cG9ydCBjb25zdCBESVNNSVNTX1JFQVNPTlM6IERpc21pc3NSZWFzb25zID0ge1xuICBCQUNLUkRPUDogJ2JhY2tkcm9wLWNsaWNrJyxcbiAgRVNDOiAnZXNjJyxcbiAgQkFDSzogJ2Jyb3dzZXItYmFjay1uYXZpZ2F0aW9uLWNsaWNrZWQnXG59O1xuIl19
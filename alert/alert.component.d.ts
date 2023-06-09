import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { AlertConfig } from './alert.config';
import * as i0 from "@angular/core";
export declare class AlertComponent implements OnInit {
    private changeDetection;
    /** Alert type.
     * Provides one of four bootstrap supported contextual classes:
     * `success`, `info`, `warning` and `danger`
     */
    type: string;
    /** If set, displays an inline "Close" button */
    dismissible: boolean;
    /** Number in milliseconds, after which alert will be closed */
    dismissOnTimeout?: number | string;
    /** Is alert visible */
    isOpen: boolean;
    /** This event fires immediately after close instance method is called,
     * $event is an instance of Alert component.
     */
    onClose: EventEmitter<AlertComponent>;
    /** This event fires when alert closed, $event is an instance of Alert component */
    onClosed: EventEmitter<AlertComponent>;
    classes: string;
    dismissibleChange: EventEmitter<boolean>;
    constructor(_config: AlertConfig, changeDetection: ChangeDetectorRef);
    ngOnInit(): void;
    /**
     * Closes an alert by removing it from the DOM.
     */
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "alert,bs-alert", never, { "type": "type"; "dismissible": "dismissible"; "dismissOnTimeout": "dismissOnTimeout"; "isOpen": "isOpen"; }, { "onClose": "onClose"; "onClosed": "onClosed"; }, never, ["*"], false, never>;
}

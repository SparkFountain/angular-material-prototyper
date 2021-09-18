import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-component-finder',
  templateUrl: './component-finder.component.html',
  styleUrls: ['./component-finder.component.scss'],
})
export class ComponentFinderComponent implements OnInit, OnDestroy {
  term!: string;
  optionKeys!: string[];
  optionsRaw!: BehaviorSubject<string[]>;
  options$!: Observable<string[]>;

  formControl!: FormControl;

  subscriptions!: Subscription[];

  constructor(private transloco: TranslocoService) {}

  ngOnInit(): void {
    this.formControl = new FormControl();

    this.optionKeys = [
      'autocomplete',
      'badge',
      'bottomSheet',
      'button',
      'buttonToggle',
      'card',
      'checkbox',
      'chips',
      'datepicker',
      'dialog',
      'divider',
      'expansionPanel',
      'formField',
      'gridList',
      'icon',
      'input',
      'list',
      'menu',
      'paginator',
      'progressBar',
      'progressSpinner',
      'radioButton',
      'ripples',
      'select',
      'sideNav',
      'slideToggle',
      'slider',
      'snackbar',
      'sortHeader',
      'stepper',
      'table',
      'tabs',
      'toolbar',
      'tooltip',
      'tree',
    ];

    this.optionsRaw = new BehaviorSubject([] as string[]);
    this.options$ = this.formControl.valueChanges.pipe(
      withLatestFrom(this.optionsRaw),
      map(([term, options]) => {
        return options.filter((option: string) =>
          option.toLowerCase().includes(term.toLowerCase().trim())
        );
      })
    );
    this.subscriptions = [];
    this.optionKeys.forEach((key: string) => {
      this.subscriptions.push(
        this.transloco
          .selectTranslate(`componentToolbar.${key}`)
          .subscribe((value: string) => {
            let currentOptions: string[] = this.optionsRaw.value;
            this.optionsRaw.next([...currentOptions, value]);
          })
      );
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}

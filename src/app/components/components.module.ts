import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    RipplesComponent,
    SelectComponent,
    SideNavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent,
  ],
  exports: [
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    RipplesComponent,
    SelectComponent,
    SideNavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    TranslocoModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatSelectModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, TranslocoModule],
})
export class ComponentsModule {}

import { Component } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { DatePicker } from "ui/date-picker";
import { ListPicker } from "ui/list-picker";
import { isAndroid } from "platform";

@Component({
	selector: 'pickers',
	moduleId: module.id,
	templateUrl: './pickers.component.html',
	styleUrls: ['./pickers.component.css']
})

export class PickersComponent {

	public rovers: Array<string>;

	private _day: number;
	private _month: number;
	private _year: number;
	private _selectedIndex: number;
	private _selectedRover: string;

	private _datePicker: DatePicker;

	private _today: Date;

	constructor(private _page: Page, private _router: RouterExtensions) {
		if (isAndroid) {
			this._page.actionBarHidden = true;
		}

		this._today = new Date();
		this.rovers = ["Opportunity", "Curiosity", "Spirit"];
	}

	goToPhotos() {
		this._router.navigate(["/rovers/rover"], {
			replaceUrl: false,
			queryParams: {
				rover: this.rovers[this._selectedIndex].toLowerCase(),
				day: this._day,
				month: this._month,
				year: this._year
			}
		});
	}

	/* LISTPicker logic START */
	onListickerLoaded(args) {
		let listPicker = <ListPicker>args.object;
		listPicker.selectedIndex = 1;
	}

	public selectedIndexChanged(args) {
		let picker = <ListPicker>args.object;
		this._selectedIndex = picker.selectedIndex;
		this._selectedRover = this.rovers[this._selectedIndex];
		console.log("Selected Rover: " + this._selectedRover);

		this.adjustDatePickerForSelectedRover(this._today);
	}
	/* LISTPicker logic END */

	/* DatePicker logic START */
	onDatePickerLoaded(args) {
		this._datePicker = <DatePicker>args.object;

		this.adjustDatePickerForSelectedRover(this._today);
	}

	onDayChanged(args) {
		this._day = args.value;
	}

	onMonthChanged(args) {
		this._month = args.value;
	}

	onYearChanged(args) {
		this._year = args.value;
	}
	/* DatePicker logic END */

	private adjustDatePickerForSelectedRover(today: Date) {

		if (this._selectedRover) {
			switch (this._selectedRover.toLowerCase()) {
				case "opportunity":
					this._datePicker.minDate = new Date(2004, 0, 26);
					this._datePicker.maxDate = today;

					// intial values for picker date and for the queryParams
					this._datePicker.year = today.getUTCFullYear();
					this._year = this._datePicker.year;
					this._datePicker.month = today.getUTCMonth() + 1;
					this._month = this._datePicker.month;
					this._datePicker.day = today.getUTCDate();
					this._day = this._datePicker.day;
					break;
				case "curiosity":
					this._datePicker.minDate = new Date(2012, 6 + 1, 6);
					this._datePicker.maxDate = today;

					this._datePicker.year = today.getUTCFullYear();
					this._year = this._datePicker.year;
					this._datePicker.month = today.getUTCMonth() + 1;
					this._month = this._datePicker.month;
					this._datePicker.day = today.getUTCDate();
					this._day = this._datePicker.day;
					break;
				case "spirit":
					this._datePicker.minDate = new Date(2004, 0, 5);
					this._datePicker.maxDate = new Date(2010, 1 + 1, 21);

					this._datePicker.year = 2008;
					this._year = this._datePicker.year;
					this._datePicker.month = 6;
					this._month = this._datePicker.month;
					this._datePicker.day = 2;
					this._day = this._datePicker.day;
					break;
				default:
					break;
			}
		}
	}
}
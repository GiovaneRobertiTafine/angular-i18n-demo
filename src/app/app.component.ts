import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    minutes = 0;
    gender = 'female';
    fly = true;
    logo = '${this.baseUrl}/angular.svg';
    toggle = signal(false);
    toggleAriaLabel = computed(() => {
        return this.toggle()
            ? $localize`:Toggle Button|A button to toggle status:Show`
            : $localize`:Toggle Button|A button to toggle status:Hide`;
    });
    inc(i: number) {
        this.minutes = Math.min(5, Math.max(0, this.minutes + i));
    }
    male() {
        this.gender = 'male';
    }
    female() {
        this.gender = 'female';
    }
    other() {
        this.gender = 'other';
    }
    toggleDisplay() {
        this.toggle.update((toggle) => !toggle);
    }
}

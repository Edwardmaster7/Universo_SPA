export class TabSwitch{
    #getActualTab() {
        const { pathname } = window.location
        
        this.oldtab = this.tab 
        this.tab = pathname.split('/')[1]
        
        if(this.tab === '') {
            this.tab = 'home'
        } else if(this.tab === 'universo') {
            this.tab = 'universe'
        } else if(this.tab === 'exploracao') {
            this.tab = 'exploration'
        }
        console.log(`actual tab=${this.tab}, old tab=${this.oldtab}`)
    }

    switchTab() {
        this.#getActualTab()
        if(this.oldtab === undefined) {
            return
        } else if(this.oldtab !== this.tab) {
                document.querySelector(`#${this.oldtab}-tab`).classList.remove('tab-focus')
                document.querySelector(`#${this.tab}-tab`).classList.add('tab-focus')
                this.#switchBackground()
        }
    }
    
    #switchBackground() {
        if(this.oldtab === undefined) {
            return
        } else if(this.oldtab !== this.tab){
            switch(this.tab){
                case 'home':
                    document.querySelector('body').classList.remove(`${this.oldbackground}`);
                    document.querySelector('body').classList.add('background1');
                    this.oldbackground = 'background1'
                    break;
                case 'universe':
                    document.querySelector('body').classList.remove(`${this.oldbackground}`);
                    document.querySelector('body').classList.add('background2');
                    this.oldbackground = 'background2'
                    break;
                case 'exploration':
                    document.querySelector('body').classList.remove(`${this.oldbackground}`);
                    document.querySelector('body').classList.add('background3');
                    this.oldbackground = 'background3'
                    break;
                default:
                    return
            }
        }
    }
}

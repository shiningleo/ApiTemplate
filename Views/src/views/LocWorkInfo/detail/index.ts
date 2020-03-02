﻿import {ViewModel} from './viewModel';
//@ts-ignore
import * as template from './view.html';
import { registerCompoent } from '../../utils';

export function use(){
    registerCompoent('ke-locworkinfo-detail',{
        viewModel: ViewModel,
        template: template
    });
}
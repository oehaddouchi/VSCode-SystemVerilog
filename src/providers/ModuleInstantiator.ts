//import * as vscode from 'vscode';
import { SystemVerilogWorkspaceSymbolProvider } from './WorkspaceSymbolProvider';
import { SystemVerilogDocumentSymbolProvider } from './DocumentSymbolProvider';

export class SystemVerilogModuleInstantiator {
    private workspaceSymProvider : SystemVerilogWorkspaceSymbolProvider;
    private docSymProvider       : SystemVerilogDocumentSymbolProvider;

    constructor(workspaceSymProv: SystemVerilogWorkspaceSymbolProvider, docSymProv: SystemVerilogDocumentSymbolProvider){
        this.workspaceSymProvider = workspaceSymProv;
        this.docSymProvider = docSymProv;
    }

    public auto_instantiate(symbol: string){
        return symbol;
    }
}
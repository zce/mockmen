import { ExtensionContext, commands, window, workspace } from 'vscode';
import { Server } from './Server';

// https://github.com/Jasonlhy/VSCode-Browser-Sync
export function activate(context: ExtensionContext) {
	console.log('Congratulations, your extension "mockmen" is now active!');

	let server: Server;

	const start = commands.registerCommand('extension.mockmen.start', () => {
		server = server || new Server(workspace.name || 'mockmen-server');

		console.log(workspace.workspaceFolders);

		if (!workspace.workspaceFolders || !workspace.workspaceFolders.length) {
			return window.showInformationMessage('Failed!');
		}

		const root = workspace.workspaceFolders[0];
		server.start(root.uri.path);

		window.showInformationMessage('Hello World!');
	});

	const stop = commands.registerCommand('extension.mockmen.stop', () => {
		server && server.stop();
	});

	context.subscriptions.push(start);
}

export function deactivate() {

}

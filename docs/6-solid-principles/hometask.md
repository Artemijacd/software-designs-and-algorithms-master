---
sidebar_position: 6
---

# 5. 📚 Home Task

1. Identify SOLID Principles

   Choose a large open source project written in TypeScript preferably (choose another OOP language if you want: Java, C#, Ruby). You may want to look at [Angular](https://github.com/angular) or [VS Code](https://github.com/microsoft/vscode) source code. A project may be considered large enough if it contains at least 30 classes.

   Try to identify **at least 1 (one)** example of each SOLID principle. Document them by filling in the table below. Note that you don't need to give code examples itself, just provide the link to file with line numbers range (or whatever you want to clearly recognize the example you describe, e.g. file hello.ts:15-36, class Foo), you can also write free text.

https://github.com/microsoft/vscode/tree/main/src


   | Principle                        |                                    Examples                                        |
   | -------------------------------- |                                    --------                                        |
   | Single Responsibility Principle  |   src/vs/base/browser/browser.ts; line: 9; class: WindowManager                    |
   | Open / Closed Principle          |   src/vs/base/browser/ui/button/button.ts; line: 45; interface: IButton                |
   | Liskov Substitution Principle    |   src/vs/base/browser/ui/button/button.ts; line: 45; interface: IButton                |
   | Interface Seggregation Principle |   src/vs/base/common/worker/simpleWorker.ts; line: 266; class: SimpleWorkerClient  |
   | Dependency Inversion Principle   |   src/vs/base/common/lifecycle.ts; line: 21; interface: IDisposableTracker         |

2. Violations of SOLID and Other Principles

   Try to find **at least 1 (one)** violations of each SOLID principle in the project you have chosen for Problem 1 and document it. Additionally, you can describe other (DRY/KISS/YAGNI/etc.) violations.

   You may provide short descriptions about how to refactor/improve such violations.

   Optionally, you can add small examples with results of such refactoring using pseudocode or real code.


   | Principle                        |                                    Examples                                                      |
   | -------------------------------- |                                    --------                                                      |
   | Single Responsibility Principle  |   src/vs/base/browser/fastDomNode.ts; class: FastDomNode                                         |
   | Open / Closed Principle          |   src/vs/code/electron-sandbox/processExplorer/processExplorerMain.ts; line: 317; method: getId  |
   | Liskov Substitution Principle    |   src/vs/editor/browser/viewParts/contentWidgets/contentWidgets.ts; class ViewContentWidgets     |
   | Interface Seggregation Principle |   src/vs/workbench/browser/codeeditor.ts line: 216; class FloatingClickMenu, Disposible          |
   | Dependency Inversion Principle   |   src/vs/base/browser/ui/selectBox/selectBoxNative.ts; line: 42; class SelectBoxNative           |

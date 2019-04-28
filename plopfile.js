const promptDirectory = require('inquirer-directory');

module.exports = plop => {
    function isComponent(type) {
        return type === 'Functional Component'
            || type === 'Classy Component'
            || type === 'Functional Component (connected)'
            || type === 'Classy Component (connected)';
    }


    plop.setPrompt('directory', promptDirectory);
    plop.setGenerator('actions', {
        description: 'Generate file types',
        prompts: [
            {
                type: 'list',
                name: 'fileType',
                message: 'What shall we create?',
                choices: [
                    'actions',
                    'apiData',
                    'Functional Component',
                    'Functional Component (connected)',
                    'Classy Component',
                    'Classy Component (connected)',
                    'viewStates'
                ]
            },
            {
                type: 'input',
                name: 'componentName',
                message: 'What shall we name this component?',
                when: data => {
                    return isComponent(data.fileType);
                }
            },
            {
                basePath: './src/App',
                type: 'directory',
                name: 'directory',
                message: 'Where shall we put it?'
            }
        ],
        actions: data => {
            if (isComponent(data.fileType)) {
                const actions = [];
                switch (data.fileType) {
                    case 'Classy Component': {
                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.js',
                            templateFile: 'plop-templates/ClassyComponent.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.test.js',
                            templateFile: 'plop-templates/ComponentTest.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.less',
                            templateFile: 'plop-templates/ComponentLess.hbs'
                        });

                        break;
                    }

                    case 'Functional Component': {
                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.js',
                            templateFile: 'plop-templates/FunctionalComponent.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.test.js',
                            templateFile: 'plop-templates/ComponentTest.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.less',
                            templateFile: 'plop-templates/ComponentLess.hbs'
                        });
                        break;
                    }

                    case 'Functional Component (connected)': {
                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.js',
                            templateFile: 'plop-templates/FunctionalComponentConnected.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.test.js',
                            templateFile: 'plop-templates/ComponentTest.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.less',
                            templateFile: 'plop-templates/ComponentLess.hbs'
                        });

                        break;
                    }

                    case 'Classy Component (connected)': {
                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.js',
                            templateFile: 'plop-templates/ClassyComponentConnected.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.test.js',
                            templateFile: 'plop-templates/ComponentTest.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/App/{{directory}}/{{componentName}}.less',
                            templateFile: 'plop-templates/ComponentLess.hbs'
                        });

                        break;
                    }

                    default:
                }

                return actions;
            }

            return [
                {
                    type: 'add',
                    path: 'src/App/{{directory}}/{{fileType}}.js',
                    templateFile: 'plop-templates/{{fileType}}.hbs'
                },
                {
                    type: 'add',
                    path: 'src/App/{{directory}}/{{fileType}}.test.js',
                    templateFile: 'plop-templates/{{fileType}}.test.hbs'
                }
            ];
        }
    });
};

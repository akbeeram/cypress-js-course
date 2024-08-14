describe('cypress other commands spec', () => {

    it('passes', () => {
        cy.visit('http://127.0.0.1:8080/')
    });

    it('.then', () => {
        cy.visit('http://127.0.0.1:8080/');
        cy.get('input').then((el) => {
            console.log(el)
        })
            .should('have.length', 6)
            .then((el) => {
                console.log(el)
            })
    });

    it('.visit', () => {
        cy.visit('http://127.0.0.1:8080/post.html', {
            qs: {
                postId: 2
            }
        })
    });

    it('.log', () => {
        cy.log('sample msg')
        console.log('msg')
    });

    it('.debug', () => {
        cy.visit('http://127.0.0.1:8080/');
        cy.get('input').debug()
    });

    it('.pause', () => {
        cy.visit('http://127.0.0.1:8080/');
        cy.get('input').pause()
    });

    it('.go', () => {
        cy.visit('http://127.0.0.1:8080/dashboard.html');
        cy.wait(4000)
        cy.get('a').contains('Top 10 Companies').click()
        cy.wait(4000)
        cy.go('back')
        cy.wait(4000)
        cy.go('forward')
        // cy.go(-1)
        // cy.wait(4000)
        // cy.go(1)
    });

    it('.reload', () => {
        cy.visit('http://127.0.0.1:8080');
        cy.wait(4000)
        cy.reload();
    });

    it('.wait', () => {
        cy.visit('http://127.0.0.1:8080/dashboard.html');
        cy.wait(4000)       //milliseconds
        cy.reload();
    });

    it('.focus/.blur', () => {
        cy.visit('http://127.0.0.1:8080/');
        cy.wait(4000)
        cy.get('#username').as('input')
        cy.get('@input').focus()
        cy.wait(4000)
        cy.get('@input').blur()
    });

    it('.each', () => {
        cy.visit('http://127.0.0.1:8080/dashboard.html');
        cy.get('.postItem').each((listItem, i) => {
            cy.log(listItem)
            cy.log(i)
        })
    });

    it('.wrap', () => {
        cy.wrap({
            name: 'anil',
            gender: 'male',
            role: 'trainer'
        })
            .should('have.property', 'name')
        cy.visit('http://127.0.0.1:8080/dashboard.html');
        cy.get('.postItem').each((listItem, i) => {
            cy.wrap(listItem).should('exist')
            cy.log(listItem)
            cy.log(i)
        })
    });

    it('.spread', () => {
        cy.visit('http://127.0.0.1:8080/');
        // cy.get('#email').as('emailInput')
        // cy.get('#username').as('usernameInput')
        // cy.get('#password').as('pwdInput')
        cy.get('input[type=text]').spread((email, name) => {
            cy.log(email, name)
            console.log(email)
            // expect(email)
            cy.wrap(email).should('exist')
            // .should('exist')
            // cy.wrap(email)
            //     .should('exist')
            //     .should('be.focused');
            // cy.wrap(name)
            //     .should('exist')
        });
    });
    it('.request', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').as('postList');
        cy.get('@postList').then((l) => console.log(l.body))
        // console.log(postList)
    });

    it('.writeFile', () => {
        cy.writeFile('cypress/mocks/file.txt', 'Cypress Course');
        cy.writeFile('cypress/mocks/file.json', {
            name: 'anil', role: 'trainer', place: 'hyd'
        });
    });
    it('.readFile', () => {
        cy.readFile('cypress/mocks/file.txt').then((data) => {
            cy.log(data)
            expect(data).to.equal('Cypress Course')
        })
        cy.readFile('cypress/mocks/file.json').then((data) => {
            cy.log(data)
            expect(data).to.have.any.keys(['temp'])
        })
    });
    it('.fixture', () => {
        cy.fixture('comments.json').then((data) => {
            cy.log(data)
        })
    });
    it('.screenshot', () => {
        cy.visit('http://127.0.0.1:8080/');
        // cy.screenshot();
        // cy.screenshot('err.png');
        cy.screenshot({ clip: { x: 50, y: 50, width: 500, height: 400 } });
    });

    it('cookie/storage', () => {
        cy.visit('http://127.0.0.1:8080/').wait(2000)
        cy.get('#email').type('anil@email.com').wait(500);
        cy.get('#username').type('anil@email.com').wait(500);
        cy.get('#password').type('anil@email.com').wait(500);
        cy.get('input[type=radio]').first().check().wait(500);
        cy.get('#loginBtn').click().wait(500);
        // cy.getCookies().then((r) => {
        //     console.log(r)
        // });
        // cy.getAllCookies().then((r) => {
        //     console.log(r)
        // });
        // cy.getCookie('email').then((r) => {
        //     console.log(r);
        // });
        // cy.clearCookies()
        // cy.clearAllCookies()
        // cy.getAllLocalStorage().then((r) => {
        //     console.log(JSON.parse(r['http://127.0.0.1:8080'].current_user))
        // });
        // cy.clearAllLocalStorage();
        cy.getAllSessionStorage().then((r) => {
            console.log(JSON.parse(r['http://127.0.0.1:8080'].current_user))
        });
        // cy.clearAllLocalStorage();
    });

    it('.intercept', () => {
        cy.fixture('comments.json').then((comments) => {
            cy.visit('http://127.0.0.1:8080/post.html?postId=1');
            cy.intercept('https://jsonplaceholder.typicode.com/posts/1/comments', [comments[0], comments[1]]);
        });
    });

    it('.spy', () => {
        const obj = {
            name: 'Cypress',
            getName: function () {
                return this.name + 'Course'
            }
        };
        cy.spy(obj, 'getName');
        obj.getName();
        expect(obj.getName).to.be.called;


        // cy.visit('http://127.0.0.1:8080/public/index.html').wait(2000)
        // cy.window().then((w) => {
        //     cy.spy(w, 'handleBtnClick').as('mySpy');
        // })
        // cy.get('#email').type('anil@email.com').wait(500);
        // cy.get('#username').type('anil@email.com').wait(500);
        // cy.get('#password').type('anill.com').wait(500);
        // cy.get('input[type=radio]').first().check().wait(500);
        // cy.get('#loginBtn').click().wait(500);

        // cy.get('@mySpy').should('have.been.called')



        // cy.visit('http://127.0.0.1:8080/public/sites/social-media/post.html?postId=1')
        // cy.window().then((w) => {
        //     cy.spy(w, 'fetch').as('mySpy');
        // })

        // cy.get('@mySpy').should('have.been.called')
        // cy.get('@mySpy').should('have.been.calledWith', 'https://jsonplaceholder.typicode.com/posts/1/comments')

    });

    it('.stub', () => {
        const obj = {
            name: 'Cypress',
            getName: function () {
                return this.name;
            }
        };
        // cy.stub(obj, 'getName').returns('Course');
        cy.stub(obj, 'getName', () => {
            return 'Javascript'
        });
        var msg = obj.getName();
        cy.log(msg)
        expect(msg).to.equal('Javascript');

    });


    it('custom command', () => {
        // console.log(Cypress);
        cy.visit('http://127.0.0.1:8080/public/');
        cy.selectRadioWithLabel('female');
    });
});
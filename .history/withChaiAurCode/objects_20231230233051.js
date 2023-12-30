// singleton
//Object.create

const myuser = Symbol("key1")

const user = {
    name: "yuvraj chaudhary",
    age: 21,
    [myuser]: "user 1",
    email: "yuvrajchaudhay@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "sunday","saturday"]

}


// console.log(user.name);
// console.log(user["name"]);
// console.log(user[myuser]);
// console.log( typeof user[myuser]);

user.email = "yuvichaudhary@gmail.com"

// console.log(user);
// Object.freeze(user);

user.age = 19;
// console.log(user);


user.greetings = function(){
    console.log("hello users");
}
user.greetingsTwo = function(){
    console.log(`hello my name is ${this.name}`);
}

// console.log(user.greetings( ));
// console.log(user.greetingsTwo());


const tinderUser = {
    name: "xyz",
    id: 22,
    email: "abc@gmail.com"
}
const tinderUser2 = {
    name: "yuvraj chaudhary",
    2: 22,
    3: "abde@gmail.com"
}

// const tinderUser3 = {tinderUser,tinderUser2}

// const tinderUser3 = Object.assign({},tinderUser2,tinderUser)

const tinderUser3 = {...tinderUser,...tinderUser2}
console.log(tinderUser3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("number"));


// destructuring of objects 


const course =  {
    course: "javascript in hindi ",
    price: 999,
    courseInstructor: "yuvraj chaudhary"
}

console.log([
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1735491911.636,
        "hostOnly": true,
        "httpOnly": false,
        "name": "userHID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "c9afa18914484739bf888a768c3f4b26"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1738515841.951943,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga_VJTFGHZ5NH",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GS1.2.1703955252.63.1.1703955841.60.0.0"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1705763354,
        "hostOnly": false,
        "httpOnly": false,
        "name": "ajs_group_id",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "null"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1738515963.097788,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga_2PV8LWETCX",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GS1.1.1703955252.71.1.1703955963.1.0.0"
    },
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1735491911.639,
        "hostOnly": true,
        "httpOnly": false,
        "name": "userPID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "4049298683d64647bf12c9318386971f"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1705763354,
        "hostOnly": false,
        "httpOnly": false,
        "name": "ajs_user_id",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "%220fc166e869364fa687961e34ccf47cd7%22"
    },
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1704042541.181699,
        "hostOnly": true,
        "httpOnly": false,
        "name": "sessionUserUP",
        "path": "/in",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IiIsImF1ZCI6InVtX2FjY2VzcyIsImV4cCI6MTcwNDA0MjMxMSwiaWF0IjoxNzAzOTU1OTExLCJpc3MiOiJUUyIsImp0aSI6ImUwZmRkZmFjNmE1NzRjOTM4MTcyNmE4M2YyNTcwOGU0Iiwic3ViIjoie1wiaElkXCI6XCJjOWFmYTE4OTE0NDg0NzM5YmY4ODhhNzY4YzNmNGIyNlwiLFwicElkXCI6XCI0MDQ5Mjk4NjgzZDY0NjQ3YmYxMmM5MzE4Mzg2OTcxZlwiLFwibmFtZVwiOlwicmFwYXVuemVsXCIsXCJwaG9uZVwiOlwiOTM1OTIwMjM1M1wiLFwiaXBcIjpcIjI0MDU6MjAxOjUwMTc6OTg4NjpiNTgzOjY5NmY6ZGQ1YjpjMWE2XCIsXCJjb3VudHJ5Q29kZVwiOlwiaW5cIixcImN1c3RvbWVyVHlwZVwiOlwibnVcIixcInR5cGVcIjpcInBob25lXCIsXCJpc0VtYWlsVmVyaWZpZWRcIjpmYWxzZSxcImlzUGhvbmVWZXJpZmllZFwiOnRydWUsXCJkZXZpY2VJZFwiOlwiYWM5OTExZDAtMmYwOS00ZjNmLTg4YjMtYmI0Y2M3MjQwNDc3XCIsXCJwcm9maWxlXCI6XCJBRFVMVFwiLFwidmVyc2lvblwiOlwidjJcIixcInN1YnNjcmlwdGlvbnNcIjp7XCJpblwiOntcIkhvdHN0YXJCdW5kbGVcIjp7XCJzdGF0dXNcIjpcIlNcIixcImV4cGlyeVwiOlwiMjAyNC0wMS0wN1QxMDoyOTo1OS4wMDBaXCIsXCJzaG93QWRzXCI6XCIxXCIsXCJjbnRcIjpcIjFcIn19fSxcImVudFwiOlwiQ3NrQkNnVUtBd29CQlJLL0FSSUhZVzVrY205cFpCSURhVzl6RWdsaGJtUnliMmxrZEhZU0JtWnBjbVYwZGhJSFlYQndiR1YwZGhJRWNtOXJkUklEZDJWaUVnUnRkMlZpRWdkMGFYcGxiblIyRWdWM1pXSnZjeElHYW1sdmMzUmlFZ3BqYUhKdmJXVmpZWE4wRWdSMGRtOXpFZ1J3WTNSMkVnTnFhVzhTQjJwcGJ5MXNlV1lhQW5Oa0dnSm9aQm9EWm1oa0lnTnpaSElpQldoa2NqRXdJZ3RrYjJ4aWVYWnBjMmx2YmlvR2MzUmxjbVZ2S2doa2IyeGllVFV1TVNvS1pHOXNZbmxCZEcxdmMxZ0JDZzBTQ3doa09BWkFBVkM0Q0ZnQkNpSUtHZ29PRWdVMU5UZ3pOaElGTmpRd05Ea0tDQ0lHWm1seVpYUjJFZ1E0WkZnQkN0d0JDZ1VLQXdvQkFCTFNBUklIWVc1a2NtOXBaQklEYVc5ekVnbGhibVJ5YjJsa2RIWVNCbVpwY21WMGRoSUhZWEJ3YkdWMGRoSUVjbTlyZFJJRGQyVmlFZ1J0ZDJWaUVnZDBhWHBsYm5SMkVnVjNaV0p2Y3hJR2FtbHZjM1JpRWdwamFISnZiV1ZqWVhOMEVnUjBkbTl6RWdSd1kzUjJFZ05xYVc4U0IycHBieTFzZVdZU0JIaGliM2dTQzNCc1lYbHpkR0YwYVc5dUdnSnpaQm9DYUdRYUEyWm9aQ0lEYzJSeUlnVm9aSEl4TUNJTFpHOXNZbmwyYVhOcGIyNHFCbk4wWlhKbGJ5b0laRzlzWW5rMUxqRXFDbVJ2YkdKNVFYUnRiM05ZQVJKUkNBRVEyTURqbTg0eEdrUUtHa3BwYnk1SlRpNUNkVzVrYkdVdVRXOXVkR2hzZVM1R1ZGUklFZzFJYjNSemRHRnlRblZ1Wkd4bEdnTktTVThnOEkrMXRmUXdLTmpBNDV2T01UQUdPQUZBQXpBQlwiLFwiaXNzdWVkQXRcIjoxNzAzOTU1OTExMzY3LFwibWF0dXJpdHlMZXZlbFwiOlwiQVwiLFwiZHBpZFwiOlwiNDA0OTI5ODY4M2Q2NDY0N2JmMTJjOTMxODM4Njk3MWZcIixcInN0XCI6MSxcImRhdGFcIjpcIkNnUUlBQklBQ2d3SUFDSUlrQUdGMnVLZzJpOEtCQWdBT2dBS0JBZ0FNZ0FLQkFnQVFnQUtvUUVJQUNxY0FRb3hDZ0FTR0FvRGFHbHVHaEVJQVJJSFkzSnBZMnRsZEJqSXlZNnFCaElUQ2dObGJtY2FEQklFTVRVeU5SaVN2dXlxQmdvWUNnSUlBaElGQ2dObGJtY1NCUW9EYUdsdUdMalh0NndHQ2ljS0J3Z0JGUUFBQUVBU0Nnb0RhR2x1SlNhR1B6OFNDZ29EWlc1bkpiVHpnRDRZdU5lM3JBWUtFUW9DQ0FNU0JRb0RhR2x1R0xqWHQ2d0dDaEVLQWdnRUVnVUtBMmhwYmhqSXlZNnFCZz09XCJ9IiwidmVyc2lvbiI6IjFfMCJ9.nrt5lkmu0lcrjs3EW_IXY83__y8sESS5bU9OC29xm7g"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1706957757,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_fbp",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "fb.1.1698232786265.1693653584"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1738515841.82701,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GA1.1.1263375075.1658469809"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1738515963.090549,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga_EPJ8DYH89Z",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GS1.1.1703955252.71.1.1703955963.1.0.0"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1738515963.103,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga_QV5FD29XJC",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GS1.1.1703955252.136.1.1703955963.1.0.0"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1707834355,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gcl_au",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "1.1.1115391367.1700058355"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1704042241,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gid",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GA1.2.2128301894.1703955252"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1704042241,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_uetsid",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "0eded0d0a73411ee927b61a01a555de6"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1737651841,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_uetvid",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "01de6080098411edbf5aaf9e53f5f98d"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1705763354,
        "hostOnly": false,
        "httpOnly": false,
        "name": "ajs_anonymous_id",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "%228d00a092-e903-45cc-b297-a32d9b89f829%22"
    },
    {
        "domain": "www.hotstar.com",
        "hostOnly": true,
        "httpOnly": false,
        "name": "appLaunchCounter",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "2"
    },
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1705763347,
        "hostOnly": true,
        "httpOnly": false,
        "name": "device_id",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "ac9911d0-2f09-4f3f-88b3-bb4cc7240477"
    },
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1735491961,
        "hostOnly": true,
        "httpOnly": false,
        "name": "deviceId",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "ac9911d0-2f09-4f3f-88b3-bb4cc7240477"
    },
    {
        "domain": ".hotstar.com",
        "expirationDate": 1707750171.435173,
        "hostOnly": false,
        "httpOnly": false,
        "name": "hs_uid",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "ac9911d0-2f09-4f3f-88b3-bb4cc7240477"
    },
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1738515841.09492,
        "hostOnly": true,
        "httpOnly": false,
        "name": "SELECTED__LANGUAGE",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "eng"
    },
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1735491902.998,
        "hostOnly": true,
        "httpOnly": false,
        "name": "userCountryCode",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "in"
    },
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1735491911.635,
        "hostOnly": true,
        "httpOnly": false,
        "name": "userUP",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IiIsImF1ZCI6InVtX2FjY2VzcyIsImV4cCI6MTcwNDA0MjMxMSwiaWF0IjoxNzAzOTU1OTExLCJpc3MiOiJUUyIsImp0aSI6ImUwZmRkZmFjNmE1NzRjOTM4MTcyNmE4M2YyNTcwOGU0Iiwic3ViIjoie1wiaElkXCI6XCJjOWFmYTE4OTE0NDg0NzM5YmY4ODhhNzY4YzNmNGIyNlwiLFwicElkXCI6XCI0MDQ5Mjk4NjgzZDY0NjQ3YmYxMmM5MzE4Mzg2OTcxZlwiLFwibmFtZVwiOlwicmFwYXVuemVsXCIsXCJwaG9uZVwiOlwiOTM1OTIwMjM1M1wiLFwiaXBcIjpcIjI0MDU6MjAxOjUwMTc6OTg4NjpiNTgzOjY5NmY6ZGQ1YjpjMWE2XCIsXCJjb3VudHJ5Q29kZVwiOlwiaW5cIixcImN1c3RvbWVyVHlwZVwiOlwibnVcIixcInR5cGVcIjpcInBob25lXCIsXCJpc0VtYWlsVmVyaWZpZWRcIjpmYWxzZSxcImlzUGhvbmVWZXJpZmllZFwiOnRydWUsXCJkZXZpY2VJZFwiOlwiYWM5OTExZDAtMmYwOS00ZjNmLTg4YjMtYmI0Y2M3MjQwNDc3XCIsXCJwcm9maWxlXCI6XCJBRFVMVFwiLFwidmVyc2lvblwiOlwidjJcIixcInN1YnNjcmlwdGlvbnNcIjp7XCJpblwiOntcIkhvdHN0YXJCdW5kbGVcIjp7XCJzdGF0dXNcIjpcIlNcIixcImV4cGlyeVwiOlwiMjAyNC0wMS0wN1QxMDoyOTo1OS4wMDBaXCIsXCJzaG93QWRzXCI6XCIxXCIsXCJjbnRcIjpcIjFcIn19fSxcImVudFwiOlwiQ3NrQkNnVUtBd29CQlJLL0FSSUhZVzVrY205cFpCSURhVzl6RWdsaGJtUnliMmxrZEhZU0JtWnBjbVYwZGhJSFlYQndiR1YwZGhJRWNtOXJkUklEZDJWaUVnUnRkMlZpRWdkMGFYcGxiblIyRWdWM1pXSnZjeElHYW1sdmMzUmlFZ3BqYUhKdmJXVmpZWE4wRWdSMGRtOXpFZ1J3WTNSMkVnTnFhVzhTQjJwcGJ5MXNlV1lhQW5Oa0dnSm9aQm9EWm1oa0lnTnpaSElpQldoa2NqRXdJZ3RrYjJ4aWVYWnBjMmx2YmlvR2MzUmxjbVZ2S2doa2IyeGllVFV1TVNvS1pHOXNZbmxCZEcxdmMxZ0JDZzBTQ3doa09BWkFBVkM0Q0ZnQkNpSUtHZ29PRWdVMU5UZ3pOaElGTmpRd05Ea0tDQ0lHWm1seVpYUjJFZ1E0WkZnQkN0d0JDZ1VLQXdvQkFCTFNBUklIWVc1a2NtOXBaQklEYVc5ekVnbGhibVJ5YjJsa2RIWVNCbVpwY21WMGRoSUhZWEJ3YkdWMGRoSUVjbTlyZFJJRGQyVmlFZ1J0ZDJWaUVnZDBhWHBsYm5SMkVnVjNaV0p2Y3hJR2FtbHZjM1JpRWdwamFISnZiV1ZqWVhOMEVnUjBkbTl6RWdSd1kzUjJFZ05xYVc4U0IycHBieTFzZVdZU0JIaGliM2dTQzNCc1lYbHpkR0YwYVc5dUdnSnpaQm9DYUdRYUEyWm9aQ0lEYzJSeUlnVm9aSEl4TUNJTFpHOXNZbmwyYVhOcGIyNHFCbk4wWlhKbGJ5b0laRzlzWW5rMUxqRXFDbVJ2YkdKNVFYUnRiM05ZQVJKUkNBRVEyTURqbTg0eEdrUUtHa3BwYnk1SlRpNUNkVzVrYkdVdVRXOXVkR2hzZVM1R1ZGUklFZzFJYjNSemRHRnlRblZ1Wkd4bEdnTktTVThnOEkrMXRmUXdLTmpBNDV2T01UQUdPQUZBQXpBQlwiLFwiaXNzdWVkQXRcIjoxNzAzOTU1OTExMzY3LFwibWF0dXJpdHlMZXZlbFwiOlwiQVwiLFwiZHBpZFwiOlwiNDA0OTI5ODY4M2Q2NDY0N2JmMTJjOTMxODM4Njk3MWZcIixcInN0XCI6MSxcImRhdGFcIjpcIkNnUUlBQklBQ2d3SUFDSUlrQUdGMnVLZzJpOEtCQWdBT2dBS0JBZ0FNZ0FLQkFnQVFnQUtvUUVJQUNxY0FRb3hDZ0FTR0FvRGFHbHVHaEVJQVJJSFkzSnBZMnRsZEJqSXlZNnFCaElUQ2dObGJtY2FEQklFTVRVeU5SaVN2dXlxQmdvWUNnSUlBaElGQ2dObGJtY1NCUW9EYUdsdUdMalh0NndHQ2ljS0J3Z0JGUUFBQUVBU0Nnb0RhR2x1SlNhR1B6OFNDZ29EWlc1bkpiVHpnRDRZdU5lM3JBWUtFUW9DQ0FNU0JRb0RhR2x1R0xqWHQ2d0dDaEVLQWdnRUVnVUtBMmhwYmhqSXlZNnFCZz09XCJ9IiwidmVyc2lvbiI6IjFfMCJ9.nrt5lkmu0lcrjs3EW_IXY83__y8sESS5bU9OC29xm7g"
    },
    {
        "domain": "www.hotstar.com",
        "expirationDate": 1715694444.346674,
        "hostOnly": true,
        "httpOnly": true,
        "name": "x_migration_exp",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "true"
    }
]);

BinomesApp.controller('BinomeRandomizeController', ['$scope', function ($scope) {
    $scope.binomes = [];
    $scope.users = [
        { "name": "dodo" },
        { "name": "pbn" },
        { "name": "chouchou" },
        { "name": "Tiphaine" },
        { "name": "Pull opo" },
        { "name": "Thierry" },
        { "name": "Rémy" }
    ];
    
    // Function piquée sur le net pour faire un shuffle il doit y avoir mieux
    $scope.shuffle = function (o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
    $scope.deleteDev = function(index) {
        $scope.users.splice(index, 1);
        $scope.randomize();
    }
    
    $scope.print = function() {
        window.print();
    }
    
    
    $scope.addDev = function() {
        if ($scope.userName !== '' && typeof $scope.userName != 'undefined')
        {
            $scope.users.push({ "name": $scope.userName});
            $scope.randomize();
        }
    };
    
    $scope.randomize = function() {
        $scope.binomes = [];
        var shuffledUsers = $scope.shuffle(this.users.slice());
        
        for (var i = 0; i < shuffledUsers.length; i++)
        {
            if ((shuffledUsers.length % 2) == 0)
            {
                console.log(shuffledUsers.length);
                var level = Math.floor(i/2);
            }
            else
            {
                var level = Math.floor(i/2);
                if (i+1 == shuffledUsers.length)
                {
                    level = level-1;
                }
            }
            
            if (typeof $scope.binomes[level] == 'undefined')
            {
                 $scope.binomes[level] = [];
            }
            $scope.binomes[level].push(shuffledUsers[i]);
        }
    };
}]);
app.controller('meetupsController', ['$scope', '$resource', function($scope, $resource){
    var Meetup = $resource('/api/meetups');
    $scope.meetups = [
      {name: 'MEAN SF Developers'},
      {name: 'NYC Dev Ops'}
    ]

    $scope.createMeetup = function () {
      var meetup = new Meetup();
      meetup.name = $scope.meetupName;
      meetup.$save();
    }
}]);

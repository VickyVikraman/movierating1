var dbService=require("../dbservice/dbservice");
// STATUS_CODE=require("../constants/statusCodes");

exports.getAllMovies = function(req, res, next) {
    try {
            // Get the documents collection
            var db=dbService.database;
            var moviesCollection = db.collection("movies");
            moviesCollection.find().toArray().then(result=>{
                res.json({
                    isSuccess: true,
                    data: result
                });
            })
            .catch(err=>{
                console.log(err);
                res.json({
                    isSuccess: false,
                    // error: STATUS_CODE.DB_ERROR
                });
        });
        } 
        catch (err) {
            console.log(err);
            res.json({

                isSuccess: false,
                // error: STATUS_CODE.SERVER_ERROR
            });
        }
};

exports.addNewMovie = function(req, res, next) {
    var movie = req.body;
    var db=dbservice.database;
    var moviesCollection=db.collection("movies")
    moviesCollection.insert(movie).then(save_data=>{
        return res.json({
            isSuccess: true,
        });
    });
}

exports.getMovieDetails = function(req, res, next) {
    console.log(req.params.movieName);
    return res.json({
        isSuccess: true,
    });
}
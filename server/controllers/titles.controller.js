const Title = require('../models/Title');

exports.getAllTitles = (req, res, next) => {
  Title.find({}, function (err, titles) {
    if (err)
      res.json({ status: 500, message: 'Error occured in retrieving titles' });

    if (!titles) {
      res.json({
        success: true,
        status: 200,
        data: {
          message: 'No title found',
        },
      });
    } else {
      res.json({
        success: true,
        status: 200,
        data: {
          message: 'titles found',
          titles,
        },
      });
    }
  });
};

// ==================================

exports.addNewTitles = (req, res, next) => {
  const data = {
    files: [],
    accessLog: [],
    jobs: [],
    title: 'Some testing string',
    metadata: 'metadata',
    packages: [],
    status: 'onboarding',
    directories: [],
    folder: 'folder',
  };

  const title = Title(data);

  title.save(function (err, dbTitle) {
    if (err) {
      return res.json({ status: 500, message: 'Unable to save amenity', err });
    }

    res.json({
      success: true,
      status: 200,
      data: {
        message: 'Title Added successfully.',
        newTitle: dbTitle,
      },
    });
  });
};

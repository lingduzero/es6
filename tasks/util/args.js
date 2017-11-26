import yargs from 'yargs';

const args = yargs

  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })

  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all scripts'
  })

  .option('verbose', {
    boolean:true,
    default:false,
    describe:'log'
  })

  .option('spurcemaps',{
    describe:'force the creation of sourcesmaps'
  })

  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv

import datepicker from 'air-datepicker';
import './styles/styles.scss';
import initDropdowns from './pug/blocks/dropdown/dropdown';

initDropdowns();

$('.air-datepicker').datepicker({
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>'
});


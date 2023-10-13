import '../styles/pages/contibution-profile.css';
import SearchInput from '../components/SearchInput';
import ContributionProfileRow from '../components/ContributionProfileRow';
import Pagination from '../components/Pagination';

const ContributionProfile = () => {
  const t = () => console.log('hello');

  return (
    <div className='contribution-profile'>
      <main>
        <section>
          <div className='search'>
            <SearchInput
              placeholder='search user by last name...'
              className='search-box'
            />
          </div>
        </section>
        <section className='table'>
          <div className='table-head'>
            <div className='table-info'>
              <h4 className='serial-number'>S/N</h4>
              <h4 className='name'>Name</h4>
              <h4 className='slot'>Slot</h4>
            </div>
            <div className='months-head'>
              <h4>Dec</h4>
              <h4>Jan</h4>
              <h4>Feb</h4>
              <h4>Mar</h4>
              <h4>Apr</h4>
              <h4>May</h4>
              <h4>Jun</h4>
              <h4>Jul</h4>
              <h4>Aug</h4>
              <h4>Sep</h4>
              <h4>Oct</h4>
              <h4>Nov</h4>
            </div>
          </div>
          <div className='table-body'>
            <ContributionProfileRow />
            <ContributionProfileRow />
            <ContributionProfileRow />
            <ContributionProfileRow />
            <ContributionProfileRow />
          </div>
        </section>
        <section className='pagination-area'>
          <Pagination
            next={1}
            prev={2}
            page={2}
            total_pages={5}
            onClick={t}
            onNextClick={t}
            onPrevClick={t}
          />
        </section>
      </main>
    </div>
  );
};

export default ContributionProfile;

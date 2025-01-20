import Section from '@components/layout/Section';
import FormContact from '@components/ui/Form/Contact';
import Maps from '@components/Maps';
import Tabs from '@components/ui/Tabs';
import { tabsContact } from '@mock/index';

export default function ContactPage() {
  return (
    <>
      <Section.Root
        title='Contact Us'
        subtitle='Contact For Any Query'
        classNameContent='grid grid-cols-1 gap-6'
      >
        <Section.Header className='block' animation='animate-none'>
          {/* Tab Content */}
          <Tabs tabs={tabsContact} variant='info' />
        </Section.Header>
        <Section.Content className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {/* Maps */}
          <Maps />
          {/* FORM Content */}
          <FormContact />
        </Section.Content>
      </Section.Root>
    </>
  );
}

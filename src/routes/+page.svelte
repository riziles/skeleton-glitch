<script>
  import { Modal, modalStore } from '@skeletonlabs/skeleton';

  async function triggerAlert() {
    const alert = {
      type: 'alert',
      title: 'Example Alert',
      body: `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Curabitur at mauris ut nisl molestie 
        eleifend ac a neque. Nunc sit amet malesuada orci. Sed 
        id consequat neque. Pellentesque vel 
        urna varius, fringilla odio et, congue diam. 
        <br /> <br /> 
        <a href="https://google.com">href</a>`,
      buttonTextCancel: 'Cancel'
    };
  // workaround for scroll issue:
    await modalStore.trigger(alert);
    document.querySelector('.modal-body').scrollTop = 0
  }
</script>

<Modal regionBody = 'max-h-24 overflow-auto' width = 'max-w-xs'/>

<div class="container h-full mx-auto flex justify-center items-center">
  <button class="btn variant-filled-primary btn-base" on:click={triggerAlert}> Open Modal </button>
</div>

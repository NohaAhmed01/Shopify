class ProductModel extends HTMLElement{
    constructor(){
        super();
        this.openModelModal();
        this.addEventListener('click',this.loadContent);
    }

    loadContent() {
        Shopify.loadFeatures(
            [
                {
                    name: 'model-viewer-ui',
                    version: '1.0',
                    onLoad: this.setUpModelViewerUI.bind(this)
                }
            ]
        )
    }

    setUpModelViewerUI(errors){
        if(errors) return;
        this.modelViewerUI = new Shopify.ModelViewerUI(document.querySelector('model-viewer'));
    }

    getMediaID() {
        const id = this.getAttribute('data-model-id');
        return id;
    }

    getModal() {
        const modal = document.getElementById('productModelModal');
        return modal;
    }

    openModelModal(){
        const mediaID = this.getMediaID();
        const modal = this.getModal();

        if(!mediaID) return;
        
        const openModelModalButton = this.querySelector(`button[id="productModelOpenButton_${mediaID}"]`);
        openModelModalButton.addEventListener('click', function(e){
            modal.querySelector('#body').innerHTML="";

            const template = document.querySelector(`product-model[data-model-id="${mediaID}"] > template`);
            const cloneModal = template.content.cloneNode(true);
            modal.querySelector('#body').appendChild(cloneModal);
            modal.querySelector('#body > model-viewer').setAttribute("reveal","auto");
        })
    }
}
const productModel = customElements.define('product-model', ProductModel);
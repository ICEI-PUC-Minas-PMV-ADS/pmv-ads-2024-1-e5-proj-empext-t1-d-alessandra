import more from'../../img/more-information.png'
function SubMenuEstoque() {
  return (
    <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class=""><img src={more} width={30} height={20}/></div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        </ul>
    </div>
  );
} export default SubMenuEstoque;